export default function resetChart() {
    this.svg.selectAll('*').style('visibility', 'visible');
    this.svg.select('text.no-data').remove();
    this.svg.select('.normal-range').remove();
}
