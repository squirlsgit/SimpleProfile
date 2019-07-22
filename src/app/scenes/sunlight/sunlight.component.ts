// ../../../<ROOT>
import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Screen } from '../../DisplayManager';
//import { palette } from '../../../Palettes/definition';
import { Sun } from 'squirls';
import { Position } from 'squirls/Engines/2D/Helpers/DataTypes/Simple';
@Component({
  selector: 'app-sunlight',
  templateUrl: './sunlight.component.html',
  styleUrls: ['./sunlight.component.scss']
})
export class SunlightComponent extends Screen implements AfterViewInit {
  @ViewChild('Sunlight') sunlight: ElementRef;

  public sun: Sun;
  public pointerAt: Position;
  public draggingObject: Sun = null;
  public get Sunlight(): HTMLCanvasElement {
    return this.sunlight.nativeElement;
  }
  constructor()
  {
    super(1, 0.8);
    this.sun = new Sun({ x: 0.8, y: 0.1}, { width: 0.1, height: 0.08});
  }

  ngAfterViewInit() {
    window.addEventListener("resize",this.listenResize(this.Sunlight, this.drawContent.bind(this)));
    this.listenResize(this.Sunlight, this.drawContent.bind(this))(null);

    this.trackClicks();
  }

  trackClicks() {
    this.Sunlight.addEventListener("click", this.clickEvent.bind(this));
  }

  trackDrag(event: MouseEvent) {
    this.pointerAt = { x: event.clientX / this.Sunlight.width, y: event.clientY / this.Sunlight.height };
    this.draggingObject.setNewPosition(this.pointerAt);
    this.draggingObject.drawSun(this.Sunlight);
  }

  clickEvent(event: MouseEvent ) {
    //console.log(" NEW POINTER CLICK #clickevent ", event);
    if (this.pointerAt = this.sun.interact(this.Sunlight, event)) {
      this.draggingObject = this.sun;
      this.Sunlight.removeEventListener("click", this.clickEvent.bind(this));
      this.Sunlight.addEventListener("click", this.endClickEvent.bind(this));
      this.Sunlight.addEventListener("mousemove", this.trackDrag.bind(this));
    }
    
    
  }
  endClickEvent(event: MouseEvent) {
    //console.log(" NEW POINTER CLICK #endclickevent", event);
    this.pointerAt = { x: event.clientX / this.Sunlight.width, y: event.clientY / this.Sunlight.height };
    this.draggingObject.setNewPosition(this.pointerAt);
    this.draggingObject.drawSun(this.Sunlight);
    this.draggingObject = null;
    this.Sunlight.removeEventListener("click", this.endClickEvent.bind(this));
    this.Sunlight.removeEventListener("mousemove", this.trackDrag.bind(this));
    this.trackClicks();
  }

  drawContent() {
    this.sun.drawSun(this.Sunlight);
  }
 


}
