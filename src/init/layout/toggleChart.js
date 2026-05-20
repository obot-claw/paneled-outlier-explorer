import { select } from 'd3';
import toggleCharts from './toggleCharts';

export default function toggleChart(chart, li) {
    //Determine state of checkbox.
    const checkbox = select(li).select('input'),
        checked = checkbox.property('checked');
    checkbox.attr('title', checked ? 'Remove chart' : 'Display chart');
    select(chart.div)
        .selectAll('.wc-chart')
        .filter(di => di.measure === select(li).datum())
        .classed('hidden', !checked);

    //If any checkbox is unchecked, uncheck measureListCheckbox.
    toggleCharts(chart, false);
}
