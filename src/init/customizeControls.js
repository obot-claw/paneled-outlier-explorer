import { select } from 'd3';
import applyFilters from './customizeControls/applyFilters';

export default function customizeControls() {
    const context = this,
        controls = this.controls.wrap
            .selectAll('.control-group')
            .classed(
                'hidden',
                d =>
                    (this.config.normal_range_method !== 'Standard Deviation' &&
                        /standard deviation/i.test(d.label)) ||
                    (this.config.normal_range_method !== 'Quantiles' && /quantile/i.test(d.label))
            );

    //Define x-axis option labels.
    controls
        .filter(control => control.label === 'X-axis')
        .selectAll('option')
        .property(
            'label',
            d => this.config.time_cols.filter(time_col => time_col.value_col === d).pop().label
        );

    //Define x-axis option labels.
    controls
        .filter(control => control.label === 'X-axis')
        .selectAll('option')
        .property(
            'label',
            d => this.config.time_cols.filter(time_col => time_col.value_col === d).pop().label
        );

    //Add custom x-domain and filter functionality.
    controls
        .filter(d => d.type === 'subsetter' || d.label === 'X-axis')
        .on('change', function(d) {
            d.value = select(this)
                .selectAll('option')
                .filter(function() {
                    return this.selected;
                })
                .text();
            applyFilters.call(context, d);
        });

    //Add custom normal range functionality.
    const normalRangeControl = controls.filter(d => d.label === 'Normal range method');
    normalRangeControl.on('change', function(d) {
        const normal_range_method = select(this)
            .select('option:checked')
            .text();

        controls.classed(
            'hidden',
            d =>
                (normal_range_method !== 'Standard Deviation' &&
                    /standard deviation/i.test(d.label)) ||
                (normal_range_method !== 'Quantiles' && /quantile/i.test(d.label))
        );
    });
}
