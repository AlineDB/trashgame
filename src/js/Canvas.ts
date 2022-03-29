

export class Canvas {
    private readonly canvas: HTMLCanvasElement;


    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.addEventListeners();
        this.update();
    }

    update() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addEventListeners() {
        window.addEventListener('resize', () => {
            this.update();
        });
    }
}