export default function handleNoData() {
    this.svg.selectAll('*').style('visibility', 'hidden');
    this.svg
        .append('text')
        .classed('no-data', true)
        .attr({
            x: 0,
            dx: -this.config.margin.left,
            y: 0,
            dy: 10
        })
        .text('No data selected.');
}
