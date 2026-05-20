import { select } from 'd3';
import doLineSegmentsIntersect from './brushMarks/doLineSegmentsIntersect';

export default function highlightCharts() {
    //Highlight brushed lines.
    this.parent.wrap
        .selectAll('.line-supergroup g.line path')
        .classed('brushed', false)
        .filter(d => this.parent.data.IDs.selected.indexOf(d.id) > -1)
        .classed('brushed', true)
        .each(function(d) {
            select(this.parentNode).moveToFront();
        });

    //Draw listing displaying brushed IDs first.
    if (this.parent.data.IDs.selected.length) {
        select('#Listing-nav').classed('brushed', true);
        this.parent.listing.data.raw = this.parent.data.raw.filter(
            d => this.parent.data.IDs.selected.indexOf(d[this.config.id_col]) > -1
        );
        this.parent.listing.draw();
    } else {
        select('#Listing-nav').classed('brushed', false);
        this.parent.listing.data.raw = this.parent.data.raw;
        this.parent.listing.draw();
    }
}
