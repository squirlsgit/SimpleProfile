import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-foreground',
  templateUrl: './foreground.component.html',
  styleUrls: ['./foreground.component.scss']
})
export class ForegroundComponent implements AfterViewInit {
  @ViewChild('Menu') menuCanvas: ElementRef;
  @Input() defaultColor: string;
  // Canvas Calculation Variables

  public menublocks: number = 7;
  public menuInflectionPoints: any = { 1: true, 4: true };
  public get MenuWidth(): number {
    console.log("window width   ", this.Menu.width);
    return this.Menu.width;
  }
  public get MenuHeight(): number {
    console.log("window height    ", this.Menu.height);
    return this.Menu.height * 0.8;
  }
  public get MenuPadding(): number {
    return this.MenuWidth * 0.1;
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
  constructor() { }

  ngAfterViewInit() {
    this.Menu.setAttribute("width", `${window.screen.width}`);
    this.Menu.setAttribute("height", `${window.screen.height}`)
    
    this.initializeMenuCanvas(this.Menu).then(success => { console.log(success); });

    window.onresize = (event) => {
      console.log("Window Resize", event);
      this.initializeMenuCanvas(this.Menu).then(success => { console.log(success); });
    };

  }

  async initializeMenuCanvas(canvas: HTMLCanvasElement): Promise<any> {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight * 0.2;


    let ctx = canvas.getContext('2d');
    //ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = environment.menu.foreground.colors.primary;
    //ctx.transform(1, 0, -0.1, 1, 0, 0);



    let next: any = { left: 0 + this.MenuPadding, top: 0, height: this.MenuHeight };


    for (let start = 0; start < this.menublocks; start++) {
      console.log("next", next);
      if (this.menuInflectionPoints[start]) {
        next.height = this.MenuHeight;
      }
      next = this.drawBlock(ctx, next.left, 0, next.height);
    }

    return Promise.resolve(true);
  }

  async initializeMainCanvas(canvas: HTMLCanvasElement): Promise<any> {

    return Promise.resolve(true);
  }

  drawBlock(context: CanvasRenderingContext2D, left: number, top: number, height): any {
    context.fillRect(left, top, this.BlockBaseWidth, height);
    return { left: left + this.BlockContainerWidth, height: height * 0.7 };
  }


}
