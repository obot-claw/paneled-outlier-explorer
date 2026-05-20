import { select, set } from 'd3';
import updatePopulationAnnotation from '../updatePopulationAnnotation';

export default function applyFilters(d) {
    this.data.IDs.selected = [];

    //Reset brush.
    this.multiples.forEach(multiple => {
        multiple.package.overlay.call(multiple.package.brush.clear());
        multiple.config.extent = multiple.package.brush.extent();
    });

    //De-highlight brushed lines.
    this.wrap.selectAll('.line-supergroup g.line path').classed('brushed', false);

    //De-highlight listing.
    select('#Listing-nav').classed('brushed', false);

    //Define filtered data.
    if (d.type === 'subsetter') {
        this.data.filtered = this.data.raw;
        this.controls.config.inputs
            .filter(
                input =>
                    input.type === 'subsetter' && input.value !== 'All' && input.value !== undefined
            )
            .forEach(input => {
                this.data.filtered = this.data.filtered.filter(
                    d => input.value === d[input.value_col]
                );
            });
        this.data.IDs.filtered = set(this.data.filtered.map(d => d[this.config.id_col])).values();
        updatePopulationAnnotation.call(this);
    }
}
