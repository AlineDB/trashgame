

import {Sky} from "./Sky";
import {Canvas} from "./Canvas";
import {settings} from "./settings";


class Main {
    private readonly htmlCanvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvas: Canvas;
    private sky: Sky;


    constructor() {
        this.htmlCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.htmlCanvasElement.getContext('2d');
        this.sky = new Sky(this.htmlCanvasElement, this.ctx);
        this.canvas.update();
    }
}

new Main();