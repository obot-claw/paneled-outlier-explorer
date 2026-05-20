import { set } from 'd3';

export default function defineFilteredData() {
    this.data.filtered = this.data.raw;

    //Apply current filters.
    this.filters
        .filter(filter => filter.col !== 'measure_unit' && filter.val !== 'All')
        .forEach(filter => {
            this.data.filtered = this.data.filtered.filter(d =>
                Array.isArray(filter.val)
                    ? filter.val.indexOf(d[filter.col]) > -1
                    : filter.val === d[filter.col]
            );
        });

    //Capture IDs with data matching the current filters.
    this.data.IDs.filtered = set(this.data.filtered.map(d => d[this.config.id_col]))
        .values()
        .sort();
}
