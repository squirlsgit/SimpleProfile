import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { desire } from '../../../webworkers/pixelOperationInBoundary';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("GameContainer") _gcontainer: ElementRef;
  @ViewChild("MenuContainer") _mcontainer: ElementRef;

  public get GameContainer(): HTMLDivElement {
    return this._gcontainer.nativeElement;
  }

  public get MenuContainer(): HTMLDivElement {
    return this._mcontainer.nativeElement;
  }
  public menuDefault: string = "#ffffff";
  public gameDefault: string = "#ffffff";
  constructor() { }
  ngOnInit() {
    console.log("menu style", this.MenuContainer.style);
    this.menuDefault = this.MenuContainer.style.backgroundColor;
    this.gameDefault = this.GameContainer.style.backgroundColor;
    console.log("Menu Default Color", this.menuDefault);
  }
  ngAfterViewInit() {
    console.log("menu style", this.MenuContainer.style);
    //this.menuDefault = this.MenuContainer.style.backgroundColor;
    //this.gameDefault = this.GameContainer.style.backgroundColor;
    //console.log("Menu Default Color", this.menuDefault);
    console.log("menu classes", this.MenuContainer.classList);
  }
}
