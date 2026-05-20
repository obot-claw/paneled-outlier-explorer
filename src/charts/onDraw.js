export default function onDraw() {
    if (this.package) this.package.overlay.call(this.package.brush.clear());
}
