import { set } from 'd3';

export default function defineDisplayedData() {
    this.data.displayed = this.data.filtered;

    //Remove unscheduled visits.
    if (!this.config.unscheduled_visits)
        this.data.displayed = this.data.displayed.filter(d => !d.unscheduled);

    //Remove inliers.
    if (!this.config.inliers)
        this.data.displayed = this.data.displayed.filter(
            d =>
                this.data.IDs.outliers.indexOf(d[this.config.id_col]) > -1 ||
                this.parent.data.IDs.selected.indexOf(d[this.config.id_col]) > -1
        );

    //Capture IDs that will actually be displayed.
    this.data.IDs.displayed = set(this.data.displayed.map(d => d[this.config.id_col]))
        .values()
        .sort();
}
