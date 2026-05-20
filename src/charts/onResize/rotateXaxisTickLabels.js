export default function rotateXaxisTickLabels() {
    if (this.config.x.rotate_tick_labels) {
        const ticks = this.svg
            .selectAll('.' + 'x' + '.axis .tick text')
            .attr({
                transform: 'rotate(-45)',
                dx: -10,
                dy: 10
            })
            .style('text-anchor', 'end');

        ticks
            .filter(d => ('' + d).length > 10)
            .style('cursor', 'help')
            .text(d => d.slice(0, 7) + '...')
            .append('title')
            .text(d => d);
    }
}
