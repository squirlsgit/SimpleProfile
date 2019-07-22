
import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Screen, Container } from '../../DisplayManager';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent extends Screen implements AfterViewInit {
  @ViewChild('Menu') menuCanvas: ElementRef;

  // Canvas Calculation Variables
  public deltaheight: number = 0.98;
  public menublocks: number = 100;
  public menuInflectionPoints: any = { 0: true, 25: true, 50: true, 75: true };
  public get MenuWidth(): number {
    //console.log("window width   ", this.Menu.width);
    return this.Menu.width;
  }
  public get MenuHeight(): number {
    //console.log("window height    ", this.Menu.height);
    return this.Menu.height * 0.8;
  }
  public get MenuPadding(): number {
    return this.MenuWidth * 0.025;
  }

  public get BlockContainerWidth(): number {
    return (this.MenuWidth - (this.MenuPadding * 2)) / this.menublocks
  }
  public get BlockSeperation(): number {
    return this.BlockContainerWidth * 0.03;

  }
  public get BlockBaseWidth(): number {
    return this.BlockContainerWidth - (2 * this.BlockSeperation);
  }

  public get Menu(): HTMLCanvasElement {
    return this.menuCanvas.nativeElement;
  }

  public stepAnimation: NodeJS.Timer;

  constructor() {
    super(1, 0.2);
  }

  ngAfterViewInit() {

    window.addEventListener("resize", this.listenResize(this.Menu, this.initMenu.bind(this)));
    this.listenResize(this.Menu, this.initMenu.bind(this))(null);

    //this.stepAnimation = setInterval(() => {

    //  let newinflectionpoints = {};
    //  for (var inflection in this.menuInflectionPoints) {
    //    if (Number(inflection) + 10 == this.menublocks) {
    //      newinflectionpoints[0] = true;
    //    } else {
    //      newinflectionpoints[Number(inflection) + 1] = true;
    //    }

    //  }
    //  this.menuInflectionPoints = newinflectionpoints;
    //  this.listenResize(this.Menu, this.initMenu.bind(this))(null);
    //}, 50);
  }

  async initMenu(canvas: HTMLCanvasElement): Promise<any> {

    //console.log("Initializing Obscured Menu");
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = this.Scheme.accent;
    //console.log("Menu Blocks", this.menublocks);
    let next: Array<Container> = new Array<Container>(this.menublocks);

    let delta: number = 0;
    let start: number = Number(Object.keys(this.menuInflectionPoints)[0]);
    for (let i = 0; i < this.menublocks; i++) {

      if (this.menuInflectionPoints[start + delta]) {
        start += delta;
        delta = 0;
      }
      if (start + delta == this.menublocks) {
        start = 0 - delta;
      }
      next[start + delta] = {
        left: this.MenuPadding + (start + delta) * this.BlockContainerWidth,
        top: 0,
        width: this.BlockBaseWidth,
        height: this.MenuHeight * Math.pow(this.deltaheight, delta)
      };
      delta++;
    }

    next.forEach(block => {
      this.drawBlock(ctx, block);
    })


    return Promise.resolve(true);
  }

  async initializeMainCanvas(canvas: HTMLCanvasElement): Promise<any> {

    return Promise.resolve(true);
  }

  drawBlock(context: CanvasRenderingContext2D, block: Container) {
    context.fillRect(block.left, block.top, block.width, block.height);

  }




}

