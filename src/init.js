import defineData from './init/defineData';
import captureMeasures from './init/captureMeasures';
import defineVisitOrder from './init/defineVisitOrder';
import { multiply } from 'webcharts';
import layout from './init/layout';
import updatePopulationAnnotation from './init/updatePopulationAnnotation';
import customizeControls from './init/customizeControls';
import initCustomEvents from './init/initCustomEvents';

export default function init(data) {
    //Attach various data arrays to charts.
    defineData.call(this, data);

    //Capture unique set of measures in data.
    captureMeasures.call(this);

    //Capture ordered set of visits.
    defineVisitOrder.call(this);

    //Define layout of renderer.
    layout.call(this);

    //Update population annotation with initial statistics.
    updatePopulationAnnotation.call(this);

    //Initialize charts.
    multiply(this, this.data.raw, 'measure_unit', this.config.allMeasures);

    //Initialize listing.
    this.listing.config.cols = Object.keys(data[0]).filter(
        key => ['measure_unit', 'unscheduled', 'outlier'].indexOf(key) === -1
    ); // remove system variables from listing
    this.listing.init(this.data.raw);

    //Define custom event listener for filters.
    customizeControls.call(this);

    //initialize custom events
    initCustomEvents.call(this);
}
