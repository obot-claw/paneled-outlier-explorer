export default function deriveVariables() {
    const ordinalTimeSettings = this.config.time_cols.find(time_col => time_col.type === 'ordinal');

    this.data.raw.forEach(d => {
        //Concatenate measure and unit.
        if (d[this.config.unit_col])
            d.measure_unit = `${d[this.config.measure_col]} (${d[this.config.unit_col]})`;
        else d.measure_unit = d[this.config.measure_col];

        //Identify unscheduled visits.
        d.unscheduled = false;
        if (ordinalTimeSettings) {
            if (this.config.unscheduled_visit_values)
                d.unscheduled =
                    this.config.unscheduled_visit_values.indexOf(d[ordinalTimeSettings.value_col]) >
                    -1;
            else if (this.config.unscheduled_visit_regex)
                d.unscheduled = this.config.unscheduled_visit_regex.test(
                    d[ordinalTimeSettings.value_col]
                );
        }
    });
}
