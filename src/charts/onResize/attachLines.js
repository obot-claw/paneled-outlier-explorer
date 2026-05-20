export default function attachLines() {
    this.lines = this.svg.selectAll('.line-supergroup g.line path');
    this.lines.each((d, i) => {
        d.id = d.values[0].values.raw[0][this.config.id_col];
        d.lln = d.values[0].values.raw[0][this.config.lln_col];
        d.uln = d.values[0].values.raw[0][this.config.uln_col];
        d.lines = d.values.map((di, i) => {
            var line;
            if (i) {
                line = {
                    x0:
                        this.config.x.type === 'linear'
                            ? d.values[i - 1].values.x
                            : this.x(d.values[i - 1].values.x) + this.x.rangeBand() / 2,
                    y0: d.values[i - 1].values.y,
                    x1:
                        this.config.x.type === 'linear'
                            ? di.values.x
                            : this.x(di.values.x) + this.x.rangeBand() / 2,
                    y1: di.values.y
                };
            }
            return line;
        });
        d.lines.shift();
    });
}
