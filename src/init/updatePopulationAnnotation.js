import { format } from 'd3';

export default function updatePopulationAnnotation() {
    this.populationAnnotation.select('#n-participants').text(this.data.IDs.filtered.length);
    this.populationAnnotation.select('#N-participants').text(this.data.IDs.raw.length);
    this.populationAnnotation
        .select('#n-N-rate')
        .text(format('%')(this.data.IDs.filtered.length / this.data.IDs.raw.length));
}
