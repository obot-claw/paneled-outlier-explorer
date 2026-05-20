export default function identifyPoints() {
    this.lines.filter(d => d.lines.length === 0).classed('single-point', true);
}
