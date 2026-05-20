export default function drawNormalRange() {
    if (this.config.normal_range_method)
        this.svg
            .insert('rect', '.line-supergroup')
            .classed('normal-range', true)
            .attr({
                x: this.x(this.x_dom[0]) - 5, // make sure left side of normal range does not appear in chart
                y: this.y(this.uln()),
                width: this.plot_width + 10, // make sure right side of normal range does not appear in chart
                height: this.y(this.lln()) - this.y(this.uln()),
                'clip-path': `url(#${this.id})`
            });
}
