import { extent, set } from 'd3';

export default function defineData() {
    this.data = {
        measure: this.filters[0].val
    };
    this.data.raw = this.raw_data.filter(d => d.measure_unit === this.data.measure);
    this.data.results = this.data.raw.map(d => +d[this.config.value_col]).sort((a, b) => a - b);
    this.data.yDomain = extent(this.data.results);
    this.data.yRange = this.data.yDomain[1] - this.data.yDomain[0];
    this.data.yFormat =
        this.data.yRange < 0.1
            ? '.3f'
            : this.data.yRange < 1
            ? '.2f'
            : this.data.yRange < 10
            ? '.1f'
            : '1d';
    this.data.IDs = {
        raw: set(this.data.raw.map(d => d[this.config.id_col]))
            .values()
            .sort()
    };
}
