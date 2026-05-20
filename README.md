# Paneled Outlier Explorer
![alt tag](https://user-images.githubusercontent.com/31038805/30431689-649b02c6-992d-11e7-8497-b4091829652b.gif)

## Overview 
The Paneled Outlier Explorer is a javascript library that provides paneled line charts of data points over time with point and line brushing. It is designed for use in clinical trial research, but can also be applied in other areas. 
The paneled outlier explorer is closely related to the (non-paneled) [safety outlier explorer](https://github.com/RhoInc/safety-outlier-explorer) library, and can be used to monitor key safety signals in clinical trials in conjunction with other charts in the [safety explorer suite](https://github.com/RhoInc/safety-explorer-suite). 
The Paneled Outlier Explorer includes interactive features such as real-time brushing and requires minimal user configuration.

[Click here for a live demo](https://rhoinc.github.io/paneled-outlier-explorer/test-page/) When the page loads, the user sees multiple paneled charts providing a lab data summary for each measure over time.

![alt tag](https://user-images.githubusercontent.com/31038805/30434209-a96d443e-9934-11e7-95a9-d2525491bad7.gif)

## Usage
Generally speaking, minimal configuration is needed to create a Paneled Outlier Explorer. Just [load a json data set](https://github.com/RhoInc/paneled-outlier-explorer/wiki/Data-Guidelines) and the tool will automatically create a user interface (measures, etc.) based on the data set loaded. 

Initialize the chart like so: 

```javascript
paneledOutlierExplorer('body', {}).init(data)
```

Creating a chart with a basic [custom configuration](https://github.com/RhoInc/paneled-outlier-explorer/wiki/Configuration) would look like this: 

```javascript
var settings = {
    'id_col': 'custom_id_variable',
    'filters': [
        {
            'value_col': 'GENDER',
            'label': 'Gender'
        }
    ]
};

paneledOutlierExplorer('body', settings).init(data)
```

## Links 
More information is available in the project's [wiki](https://github.com/RhoInc/paneled-outlier-explorer/wiki/): 

- [Interactive Example](https://rhoinc.github.io/paneled-outlier-explorer/test-page/)
- [Configuration](https://github.com/RhoInc/paneled-outlier-explorer/wiki/Configuration) 
- [API](https://github.com/RhoInc/paneled-outlier-explorer/wiki/Configuration)
- [Technical Documentation](https://github.com/RhoInc/paneled-outlier-explorer/wiki/Technical-Documentation) 
- [Data Guidelines](https://github.com/RhoInc/paneled-outlier-explorer/wiki/Data-Guidelines)
