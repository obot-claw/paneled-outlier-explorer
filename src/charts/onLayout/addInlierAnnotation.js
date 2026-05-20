export default function addInlierAnnotation() {
    this.inliersAnnotation = {
        g: this.svg.append('g').classed('n-inlier', true)
    };
    this.inliersAnnotation.text = this.inliersAnnotation.g.append('text');
    this.inliersAnnotation.rect = this.inliersAnnotation.g.append('rect');
    this.inliersAnnotation.title = this.inliersAnnotation.g.append('title');
}
