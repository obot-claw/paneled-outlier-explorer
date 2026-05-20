import clone from '../../util/clone';
import { svg } from 'd3';

export default function definePackage() {
    //Capture each multiple's scale.
    this.package = {
        measure: this.data.measure,
        container: this.wrap,
        overlay: this.svg.append('g').classed('brush', true),
        domain: clone(this.config.y.domain),
        xScale: clone(this.x),
        yScale: clone(this.y),
        brush: svg
            .brush()
            .x(this.x)
            .y(this.y)
    };
    this.wrap.datum(this.package);

    //Define invisible brush overlay.
    this.package.overlay.append('rect').attr({
        x: 0,
        y: 0,
        width: this.plot_width,
        height: this.plot_height,
        'fill-opacity': 0
    });

    //Attach additional data to SVG and marks.
    this.package.overlay.style('cursor', 'crosshair').datum({ measure: this.data.measure });
}
