import {settings} from "./settings";

export class Sky {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    gradient: CanvasGradient;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.update();
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.closePath();
    }

    updateSize(){
        this.gradient = this.ctx.createLinearGradient(this.canvas.width/2,0, this.canvas.width/2, this.canvas.height);
        const length = settings.sky.gradient.length;
        for (let i = 0; i < length; i++) {
            this.gradient.addColorStop(i * (1 / (length - 1)), settings.sky.gradient[i]);
        }
    }

    update(){
        this.updateSize();
        this.draw();
    }
}