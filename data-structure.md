# data
Below is a list of descriptions of each data object used by the paneled-outlier-explorer.

## paneled-outlier-explorer
data attached to the central paneled-outlier-explorer object

### `paneledOutlierExplorer.data`
an object with a property for each data array in the data flow

#### `paneledOutlierExplorer.data.initial`
data passed to `paneledOutlierExplorer.init()`

#### `paneledOutlierExplorer.data.raw`
`paneledOutlierExplorer.data.initial` with null results removed

#### `paneledOutlierExplorer.data.filtered`
`paneledOutlierExplorer.data.raw` with current filters applied

#### `paneledOutlierExplorer.data.IDs`
an object with a property for each ID array in the data flow

##### `paneledOutlierExplorer.data.IDs.initial`
an array of all IDs

##### `paneledOutlierExplorer.data.IDs.raw`
an array of IDs with results

##### `paneledOutlierExplorer.data.IDs.filtered`
an array of IDs with data represented by the current filters

##### `paneledOutlierExplorer.data.IDs.selected`
an array of selected/highlighted IDs

## paneled-outlier-explorer multiples
data attached to each paneled-outlier-explorer multiple

### `paneledOutlierExplorer.chart.multiples[].data`
an object with a property for each data array in each multiples' data flow

#### `paneledOutlierExplorer.chart.multiples[].data.measure`
the measure represented by `paneledOutlierExplorer.chart.multiples[]`

#### `paneledOutlierExplorer.chart.multiples[].data.raw`
`paneledOutlierExplorer.data.raw` with only `paneledOutlierExplorer.chart.multiples[].data.measure` results

#### `paneledOutlierExplorer.chart.multiples[].data.filtered`
`paneledOutlierExplorer.chart.multiples[].data.raw` with current filters applied

#### `paneledOutlierExplorer.chart.multiples[].data.displayed`
`paneledOutlierExplorer.chart.multiples[].data.filtered` with:
* IDs without any outliers removed if _Normal range inliers_ checkbox is checked, unless ID is currently selected
* unscheduled visits removed if _Unscheduled vists_ checkbox is checked

#### `paneledOutlierExplorer.chart.multiples[].data.IDs`
an object with a property for each ID array in the data flow

##### `paneledOutlierExplorer.data.chart.multiples[].IDs.raw`
an array of IDs with results for `paneledOutlierExplorer.chart.multiples[].data.measure`

##### `paneledOutlierExplorer.data.chart.multiples[].IDs.filtered`
an array of IDs represented in `paneledOutlierExplorer.chart.multiples[].data.filtered`

##### `paneledOutlierExplorer.data.chart.multiples[].IDs.displayed`
an array of IDs represented in `paneledOutlierExplorer.chart.multiples[].data.displayed`

##### `paneledOutlierExplorer.data.chart.multiples[].IDs.hidden`
an array of IDs not represented in `paneledOutlierExplorer.chart.multiples[].data.displayed`
