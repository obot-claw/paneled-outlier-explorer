import { set, merge } from 'd3';

export default function removeVariables() {
    //Define set of required variables.
    this.config.variables = set(
        merge([
            [this.config.measure_col],
            [this.config.id_col],
            this.config.time_cols.map(time_col => time_col.value_col),
            this.config.time_cols.map(time_col => time_col.order_col),
            [this.config.value_col],
            [this.config.unit_col],
            [this.config.lln_col],
            [this.config.uln_col],
            this.config.filters
                ? this.config.filters.map(filter => (filter.value_col ? filter.value_col : filter))
                : []
        ])
    )
        .values()
        .filter(variable => Object.keys(this.data.initial[0]).indexOf(variable) > -1);

    //Delete extraneous variables.
    this.data.initial.forEach(d => {
        for (const variable in d)
            if (this.config.variables.indexOf(variable) < 0) delete d[variable];
    });

    //If data do not have normal range variables update normal range method setting and options.
    if (
        this.config.variables.indexOf(this.config.lln_col) < 0 ||
        this.config.variables.indexOf(this.config.uln_col) < 0
    ) {
        if (this.config.normal_range_method === 'LLN-ULN')
            this.config.normal_range_method = 'Standard Deviation';
        this.controls.config.inputs
            .find(input => input.option === 'normal_range_method')
            .values.splice(1, 1);
    }
}
