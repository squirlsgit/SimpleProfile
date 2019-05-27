// ../../../<ROOT>
import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CanvasModule } from '../../CanvasModule';
import { palette } from '../../../Palettes/definition';
@Component({
  selector: 'app-sunlight',
  templateUrl: './sunlight.component.html',
  styleUrls: ['./sunlight.component.scss']
})
export class SunlightComponent extends CanvasModule implements AfterViewInit {
  @ViewChild('Sunlight') sunlight: ElementRef;


  public get Sunlight(): HTMLCanvasElement {
    return this.sunlight.nativeElement;
  }
  constructor()
  {
    super(1, 0.8);

  }

  ngAfterViewInit() {
    window.addEventListener("resize",this.listenResize(this.Sunlight));
    this.listenResize(this.Sunlight)(null);
  }
  

 


}
