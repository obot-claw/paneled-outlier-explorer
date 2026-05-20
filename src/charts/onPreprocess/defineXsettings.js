import removeVisitsWithoutData from './defineXsettings/removeVisitsWithoutData';
import removeUnscheduledVisits from './defineXsettings/removeUnscheduledVisits';

export default function defineXsettings() {
    //Update x-object.
    Object.assign(
        this.config.x,
        this.config.time_cols.find(time_col => time_col.value_col === this.config.x.column)
    );
    this.config.x.label = '';

    //Remove visits without data from x-domain if x-type is ordinal.
    if (this.config.x.type === 'ordinal') {
        this.config.x.domain = this.config.x.order;
        removeVisitsWithoutData.call(this);
        removeUnscheduledVisits.call(this);
    }

    //Delete domain setting if x-type is linear
    if (this.config.x.type !== 'ordinal') delete this.config.x.domain;

    //Update bottom margin.
    this.config.margin.bottom = this.config.x.vertical_space;
}
