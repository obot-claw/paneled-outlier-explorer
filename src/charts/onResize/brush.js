import { select, selectAll } from 'd3';
import '../../util/moveToFront';
import highlightChart from './brush/highlightChart';
import highlightCharts from './brush/highlightCharts';

export default function brush() {
    //Highlight previously brushed points.
    if (this.parent.data.IDs.selected.length) {
        this.lines
            .filter(d => this.parent.data.IDs.selected.indexOf(d.id) > -1)
            .classed('brushed', true)
            .each(function() {
                select(this.parentNode).moveToFront();
            });
    }

    //Apply brush.
    this.package.brush
        .on('brushstart', () => {
            //Clear previous brush.
            if (this.parent.brushedChart && this.parent.brushedMeasure !== this.data.measure)
                this.parent.brushedChart.package.overlay.call(
                    this.parent.brushedChart.package.brush.clear()
                );

            //Attach current brushed chart to parent.
            this.parent.brushedChart = this;
            this.parent.brushedMeasure = this.data.measure;
        })
        .on('brush', () => {
            //Add highlighting to brushed chart.
            highlightChart.call(this);
        })
        .on('brushend', () => {
            this.config.extent = this.package.brush.extent();

            //Add highlighting to all charts.
            highlightCharts.call(this);

            //trigger custom participantsSelected event
            this.parent.participantsSelected = this.parent.data.IDs.selected;
            this.parent.events.participantsSelected.data = this.parent.participantsSelected;
            this.parent.wrap.node().dispatchEvent(this.parent.events.participantsSelected);

            //Redraw charts in which the currently brushed ID(s) are inliers.
            if (this.parent.data.IDs.selected.length > 0)
                this.parent.multiples
                    .filter(
                        multiple =>
                            this.parent.data.IDs.selected.filter(
                                ID => multiple.data.IDs.displayed.indexOf(ID) < 0
                            ).length > 0
                    )
                    .forEach(multiple => {
                        multiple.draw();
                    });
        });

    //Initialize brush on brush overlay.
    this.package.overlay.call(this.package.brush);

    //Maintain brush on redraw.
    if (!this.config.extent) this.config.extent = this.package.brush.extent();
    if (
        (this.config.extent[0][0] !== this.package.brush.extent()[0][0] ||
            this.config.extent[0][1] !== this.package.brush.extent()[0][1] ||
            this.config.extent[1][0] !== this.package.brush.extent()[1][0] ||
            this.config.extent[1][1] !== this.package.brush.extent()[1][1]) &&
        this.data.measure === this.parent.brushedMeasure
    ) {
        if (this.config.x.type === 'ordinal') {
            this.config.extent[0][0] =
                (this.config.extent[0][0] * this.plot_width) / this.config.previous_plot_width;
            this.config.extent[1][0] =
                (this.config.extent[1][0] * this.plot_width) / this.config.previous_plot_width;
        }
        this.package.brush.extent(this.config.extent);
        this.package.overlay.call(this.package.brush);
        highlightCharts.call(this);
    }
}
