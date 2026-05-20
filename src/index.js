//Utility polyfills
import './util/object-assign';
import './util/array-find';
import './util/polyfills';

import { select } from 'd3';
import defineStyles from './util/defineStyles';
import clone from './util/clone';
import './util/object-assign';
import defaultSettings, { syncSettings, controlInputs, syncControlInputs } from './defaultSettings';
import { createControls, createChart, createTable } from 'webcharts';
import init from './init';
import chartCallbacks from './charts/index';
import listingCallbacks from './listing/index';

export default function paneledOutlierExplorer(element = 'body', settings) {
    //Define unique div within passed element argument.
    const container = select(element)
            .append('div')
            .attr('id', 'paneled-outlier-explorer'),
        containerElement = container.node(),
        controlsContainer = container.append('div').attr('id', 'left-side'),
        controlsContainerElement = controlsContainer.node();

    //Define .css styles to avoid requiring a separate .css file.
    defineStyles();

    //Clone, merge, and sync settings and define chart.
    const initialSettings = clone(settings),
        mergedSettings = Object.assign({}, defaultSettings, initialSettings),
        syncedSettings = syncSettings(mergedSettings),
        syncedControlInputs = syncControlInputs(controlInputs, syncedSettings),
        controls = createControls(controlsContainerElement, {
            location: 'top',
            inputs: syncedControlInputs
        }),
        chart = createChart(containerElement, syncedSettings, controls),
        listing = createTable(containerElement, { nRowsPerPage: 25 }, controls);

    //Attach stuff to chart.
    chart.container = container;
    chart.listing = listing;
    chart.config.initialSettings = clone(syncedSettings);

    //Attach stuff to listing.
    listing.container = container;
    listing.chart = chart;

    //Define chart callbacks.
    for (const callback in chartCallbacks)
        chart.on(callback.substring(2).toLowerCase(), chartCallbacks[callback]);

    //Define listing callbacks.
    for (const callback in listingCallbacks)
        listing.on(callback.substring(2).toLowerCase(), listingCallbacks[callback]);

    //Redefine chart.init() in order to call webCharts.multiply() on paneledOutlierExplorer().init().
    Object.defineProperty(chart, 'init', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: init
    });

    return chart;
}
