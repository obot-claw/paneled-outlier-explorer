import { set } from 'd3';

export default function removeVisitsWithoutData() {
    if (!this.config.visits_without_data) {
        this.config.x.domain = this.config.x.domain.filter(
            visit =>
                set(this.data.raw.map(d => d[this.config.x.column]))
                    .values()
                    .indexOf(visit) > -1
        );
    }
}
