import { set } from 'd3';

export default function captureMeasures() {
    this.config.allMeasures = set(this.data.raw.map(d => d.measure_unit))
        .values()
        .sort((a, b) => {
            const leftSort = a < b,
                rightSort = a > b;

            if (this.config.measures && this.config.measures.length) {
                const aPos = this.config.measures.indexOf(a),
                    bPos = this.config.measures.indexOf(b),
                    diff = aPos > -1 && bPos > -1 ? aPos - bPos : null;

                return diff
                    ? diff
                    : aPos > -1
                    ? -1
                    : bPos > -1
                    ? 1
                    : leftSort
                    ? -1
                    : rightSort
                    ? 1
                    : 0;
            } else return leftSort ? -1 : rightSort ? 1 : 0;
        });
    this.config.measures =
        this.config.measures && this.config.measures.length
            ? this.config.measures
            : this.config.allMeasures;
}
