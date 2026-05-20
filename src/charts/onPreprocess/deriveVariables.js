import { set } from 'd3';

export default function deriveVariables() {
    this.data.raw.forEach(d => {
        d.outlier =
            d[this.config.value_col] < this.lln(d) || d[this.config.value_col] > this.uln(d);
    });
    this.data.IDs.outliers = set(
        this.data.raw.filter(d => d.outlier).map(d => d[this.config.id_col])
    ).values();
}
