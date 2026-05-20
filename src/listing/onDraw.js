export default function onDraw() {
    //Highlight selected rows.
    if (this.data.filtered.length)
        this.table
            .selectAll('tbody tr')
            .classed(
                'brushed',
                d => this.chart.data.IDs.selected.indexOf(d[this.chart.config.id_col]) > -1
            );
}
