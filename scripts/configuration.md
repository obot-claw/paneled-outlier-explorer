The most straightforward way to customize the Paneled Outlier Explorer is by using a configuration object whose properties describe the behavior and appearance of the chart. Since the Paneled Outlier Explorer is a Webcharts `chart` object, many default Webcharts settings are set in the [defaultSettings.js file](https://github.com/RhoInc/paneled-outlier-explorer/blob/master/src/defaultSettings.js) as [described below](#webcharts-specific-settings). Refer to the [Webcharts documentation](https://github.com/RhoInc/Webcharts/wiki/Chart-Configuration) for more details on these settings.

In addition to the standard Webcharts settings several custom settings not available in the base Webcharts library have been added to the Paneled Outlier Explorer to facilitate data mapping and other custom functionality. These custom settings are described in detail below. All defaults can be overwritten by users.

# Renderer-specific settings
The sections below describe each paneled-outlier-explorer setting as of version 1.1.0.

## settings.measure_col
`string`

measure variable name

**default:** `"TEST"`



## settings.time_cols
`array`

an array of each time variable and associated metadata

**default:** 
```
[
  {
    "value_col": "VISIT",
    "type": "ordinal",
    "order": null,
    "order_col": "VISITNUM",
    "label": "Visit",
    "rotate_tick_labels": true,
    "vertical_space": 75
  },
  {
    "value_col": "DY",
    "type": "linear",
    "order": null,
    "order_col": "DY",
    "label": "Study Day",
    "rotate_tick_labels": false,
    "vertical_space": 0
  }
]
```

### settings.time_cols[].value_col
`string`

undefined

**default:** `"VISIT"`

### settings.time_cols[].type
`string`

undefined

**default:** `"ordinal"`

### settings.time_cols[].label
`string`

undefined

**default:** `"Visit"`

### settings.time_cols[].order_col
`string`

undefined

**default:** `"VISITNUM"`

### settings.time_cols[].rotate_tick_labels
`boolean`

undefined

**default:** `true`

### settings.time_cols[].vertical_space
`number`

undefined

**default:** `75`



## settings.value_col
`string`

result variable name

**default:** `"STRESN"`



## settings.id_col
`string`

identifier variable name

**default:** `"USUBJID"`



## settings.unit_col
`string`

unit variable name

**default:** `"STRESU"`



## settings.lln_col
`string`

lower limit of normal variable name

**default:** `"STNRLO"`



## settings.uln_col
`string`

upper limit of normal variable name

**default:** `"STNRHI"`



## settings.measures
`array`

list of initially displayed measures

**default:** none



## settings.filters
`array`

an array of each filter variable and associated metadata

**default:** none

### settings.filters[].value_col
`string`

undefined

**default:** none

### settings.filters[].label
`string`

undefined

**default:** none



## settings.multiples_sizing
`object`

width and height of small multiples

### settings.multiples_sizing.width
`number`

undefined

**default:** `350`

### settings.multiples_sizing.height
`number`

undefined

**default:** `175`



## settings.visits_without_data
`boolean`

toggles the display of visits with and without data

**default:** `false`



## settings.unscheduled_visits
`boolean`

toggles the display of unscheduled visits

**default:** `false`



## settings.unscheduled_visit_pattern
`string`

a regular expression that identifies unscheduled visits

**default:** `"/unscheduled|early termination/i"`



## settings.unscheduled_visits_values
`array`

an array of strings that identify unscheduled visits; overrides unscheduled_visit_pattern

**default:** none



## settings.inliers
`boolean`

toggles the display of participants with entirely normal results within each measure

**default:** `false`



## settings.normal_range_method
`string`

method for identifying the normal range

**default:** `"LLN-ULN"`



## settings.normal_range_sd
`number`

results less/greater than this the mean minus/plus this many standard deviations are outliers

**default:** `1.96`



## settings.normal_range_quantile_low
`number`

results less than this quantile are outliers

**default:** `0.05`



## settings.normal_range_quantile_high
`number`

results greater than this quantile are outliers

**default:** `0.95`

# Webcharts-specific settings
The object below contains each Webcharts setting as of version 1.1.0.

```
{    x: {        type: null, // sync to [ time_cols[0].type ]        column: null, // sync to [ time_cols[0].value_col ]        label: '' // sync to [ time_cols[0].label ]    },    y: {        type: 'linear',        column: null, // sync to [ value_col ]        label: ''    },    marks: [        {            type: 'line',            per: null, // sync to [ id_col ] and [ measure_col ]            attributes: {                'stroke-width': 1,                'stroke-opacity': 0.2,                stroke: 'black'            }        }    ],    resizable: false,    scale_text: false,    margin: {        bottom: 0,        left: 50    },    gridlines: 'xy'}
```