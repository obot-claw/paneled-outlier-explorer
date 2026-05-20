import { select } from 'd3';
import toggleChart from '../../init/layout/toggleChart';
import m__imize from './m__imizeChart/m__imize';

export default function removeChart() {
    this.wrap
        .on('mouseover', () => {
            this.wrap.selectAll('.wc-chart-title span').style('visibility', 'visible');
        })
        .on('mouseout', () => {
            this.wrap.selectAll('.wc-chart-title span').style('visibility', 'hidden');
        })
        .select('.wc-chart-title')
        .append('span')
        .classed('remove-chart chart-button', true)
        .html('&#10006;')
        .attr('title', 'Remove chart')
        .style('visibility', 'hidden')
        .on('click', () => {
            //Minimize chart.
            if (this.wrap.classed('full-screen')) m__imize(this);

            const li = select('li.measure-item.' + this.data.measure.replace(/[^a-z0-9-]/gi, '-'));
            li.select('input').property('checked', false);
            toggleChart(this, li.node());
        });
}
