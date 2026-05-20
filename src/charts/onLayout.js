import removeChart from './onLayout/removeChart';
import m__imizeChart from './onLayout/m__imizeChart';
import classChart from './onLayout/classChart';
import addInlierAnnotation from './onLayout/addInlierAnnotation';

export default function onLayout() {
    //Add button to the chart title that removes chart.
    removeChart.call(this);

    //Add button to the chart title that maximizes/minimizes chart.
    m__imizeChart.call(this);

    //Add measure-specific chart class and class that hides chart as needed.
    classChart.call(this);

    //Add node to svg for inliers annotation.
    addInlierAnnotation.call(this);
}
