// ../<ROOT>

import { Input } from '@angular/core';
import { palette } from '../Palettes/definition';

export class CanvasModule {
  public onSchemeUpdate: Function = null;
  public _scheme: palette = null;
  @Input("palette")
  public set Scheme(value: palette) {
    if (!this._scheme || ( this._scheme && this._scheme.id != value.id )) {
      console.log("New Palette Scheme", value.id);
      this._scheme = value;
      if (this.onSchemeUpdate) {
        this.onSchemeUpdate();
      }
      
    }
    
  };
  public get Scheme(): palette {
    return this._scheme || {};
  }
  public rw: number = 1;
  public rh: number = 1;

  constructor(w: number, h: number) {
    this.rw = w;
    this.rh = h;
  }

  public listenResize(canvas: HTMLCanvasElement, callback: any = null) {
    return (event) => {
      //console.log("RESETTING SIZE");
      this.setDimensions(canvas);
      this.initTemplate(canvas);
      if (callback) {
        callback(canvas);
      }
      
    };
  }
  public setDimensions(
    canvas: HTMLCanvasElement, width = document.body.clientWidth * this.rw,
    height = document.body.clientHeight * this.rh
  ) {
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    canvas.width = width;
    canvas.height = height;
  }

  public resetCanvas(
    canvas: HTMLCanvasElement
  ): CanvasRenderingContext2D {
    let ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return ctx;
  }
  public initTemplate(canvas: HTMLCanvasElement) {
    let ctx = this.resetCanvas(canvas);
    console.log("Using Style Scheme", this.Scheme.primary);
    ctx.fillStyle = this.Scheme.primary || "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}


export interface Container {
  left: number,
  top: number,
  height: number,
  width: number

}
