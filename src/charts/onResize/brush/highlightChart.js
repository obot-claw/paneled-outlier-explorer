import doLineSegmentsIntersect from './brushMarks/doLineSegmentsIntersect';

export default function highlightChart() {
    const extent = this.package.brush.extent();
    const x0 = extent[0][0]; // top left x-coordinate
    const y0 = extent[1][1]; // top left y-coordinate
    const x1 = extent[1][0]; // bottom right x-coordinate
    const y1 = extent[0][1]; // bottom right y-coordinate
    const top = { x0: x1, y0: y0, x1: x0, y1: y0 };
    const right = { x0: x1, y0: y1, x1: x1, y1: y0 };
    const bottom = { x0: x0, y0: y1, x1: x1, y1: y1 };
    const left = { x0: x0, y0: y0, x1: x0, y1: y1 };
    const sides = [top, right, bottom, left];

    //Determine which lines fall inside the brush.
    this.lines.classed('brushed', d => {
        d.intersection = false;
        //lines
        if (d.lines.length) {
            d.lines.forEach(line => {
                sides.forEach(side => {
                    if (!d.intersection)
                        d.intersection = doLineSegmentsIntersect(
                            { x: line.x0, y: line.y0 },
                            { x: line.x1, y: line.y1 },
                            { x: side.x0, y: side.y0 },
                            { x: side.x1, y: side.y1 }
                        );
                });
            });
        } else {
            //points
            const x =
                this.config.x.type === 'linear'
                    ? d.values[0].values.x
                    : this.x(d.values[0].values.x) + this.x.rangeBand() / 2;
            const y = d.values[0].values.y;
            d.intersection = x0 <= x && x <= x1 && y1 <= y && y <= y0;
        }

        return d.intersection;
    });

    this.parent.data.IDs.selected = this.lines
        .data()
        .filter(d => d.intersection)
        .map(d => d.id);
}
