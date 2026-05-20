import m__imize from './m__imizeChart/m__imize';

export default function m__imizeChart() {
    const m__imizeButton = this.wrap
        .select('.wc-chart-title')
        .append('span')
        .classed('m__imize-chart chart-button', true)
        .html('&plus;')
        .attr('title', 'Maximize chart');
    m__imizeButton.on('click', () => {
        m__imize(this);
    });
}
