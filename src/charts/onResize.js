import resetChart from './onResize/resetChart';
import definePackage from './onResize/definePackage';
import handleNoData from './onResize/handleNoData';
import drawNormalRange from './onResize/drawNormalRange';
import annotateInliers from './onResize/annotateInliers';
import attachLines from './onResize/attachLines';
import identifyPoints from './onResize/identifyPoints';
import brush from './onResize/brush';
import rotateXaxisTickLabels from './onResize/rotateXaxisTickLabels';

export default function onResize() {
    //Reset chart.
    resetChart.call(this);

    //Define datum for each multiple and attach it to multiple's container.
    definePackage.call(this);

    //Draw normal range.
    if (this.filtered_data.length == 0) handleNoData.call(this);
    else {
        //Draw normal range.
        drawNormalRange.call(this);

        //Annotate number of inliers.
        annotateInliers.call(this);

        //Attach lines to chart object.
        attachLines.call(this);

        //Identify lines with only one node.
        identifyPoints.call(this);

        //Add brush functionality.
        brush.call(this);

        //Rotate x-axis tick labels.
        rotateXaxisTickLabels.call(this);
    }
}
