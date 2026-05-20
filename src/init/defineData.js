import removeVariables from './defineData/removeVariables';
import { set } from 'd3';
import deriveVariables from './defineData/deriveVariables';

export default function defineData(data) {
    this.data = {
        initial: data
    };

    //Remove extraneous variables.
    removeVariables.call(this);

    //Define arrays of all IDs, filtered IDs, and selected IDs.
    this.data.IDs = {
        raw: set(this.data.initial.map(d => d[this.config.id_col])).values()
    };

    //Remove invalid data.
    this.data.raw = this.data.initial.filter(
        d => !/^\s*$/.test(d[this.config.measure_col]) && /^[0-9.]+$/.test(d[this.config.value_col])
    );
    this.data.filtered = this.data.raw;
    this.data.IDs.filtered = set(this.data.filtered.map(d => d[this.config.id_col])).values();
    this.data.IDs.selected = [];

    //Derive additional variables.
    deriveVariables.call(this);

    //Warn user of dropped records.
    if (this.data.raw.length !== this.data.initial.length)
        console.warn(
            `${this.data.initial.length -
                this.data.raw.length} non-numeric observations have been removed from the data.`
        );
}
