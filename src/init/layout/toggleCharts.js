import { select, selectAll } from 'd3';
import toggleChart from './toggleChart';

export default function toggleCharts(chart, toggle = true) {
    const measureListCheckbox = select('#measure-list-checkbox'),
        checked = measureListCheckbox.property('checked'),
        measureItems = selectAll('li.measure-item'),
        anyUnchecked = measureItems[0].some(
            measureItem => !measureItem.getElementsByTagName('input')[0].checked
        );

    //Handle overall toggle.
    if (toggle) {
        measureListCheckbox.attr('title', checked ? 'Remove all charts' : 'Display all charts');
        measureItems.each(function(d) {
            select(this)
                .select('input')
                .property('checked', checked);
            toggleChart(chart, this, d);
        });
        measureListCheckbox.property('checked', checked);
    } else {
        //Handle individual toggles.
        measureListCheckbox.attr(
            'title',
            anyUnchecked ? 'Display all charts' : 'Remove all charts'
        );
        measureListCheckbox.property('checked', !anyUnchecked);
    }
}
