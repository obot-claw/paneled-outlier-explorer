export default function classChart() {
    this.wrap
        .classed(this.data.measure.replace(/[^a-z0-9-]/gi, '-'), true)
        .classed('hidden', this.config.measures.indexOf(this.data.measure) === -1);
}
