// ../../<ROOT>
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { palette } from '../../Palettes/definition.js';
const palettes = require("../../Palettes/palettes.json");
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("GameContainer") _gcontainer: ElementRef;
  @ViewChild("MenuContainer") _mcontainer: ElementRef;

  // Apply Color Scheme to Canvas Modules

  public get Sunlight(): palette
  {
    return {
      id: 'sunlight',
      primary: palettes.primary["600"],
      highlight: palettes.skybluehighlight["900"],
      bright: palettes.softaqua["600"],
      lift: palettes.sunlight["600"] 
    };
  }

  public get MenuObscured(): palette
  {
    return {
      id: 'menuobscured',
      primary: palettes.skybluehighlight["900"],
      accent: palettes.skybluehighlight["600"],
      contrast: { all: palettes.skybluehighlight.contrast["900"] },
    };
  }

  public get MenuFocus(): palette
  {

    return {
      id: 'menufocus',
      primary: palettes.seagreen["900"],
      accent: palettes.seagreen["600"],
      contrast: { all: palettes.seagreen.contrast["900"]}
    }
  }


  // Container Element Accessors
  public get GameContainer(): HTMLDivElement
  {
    return this._gcontainer.nativeElement;
  }

  public get MenuContainer(): HTMLDivElement
  {
    return this._mcontainer.nativeElement;
  }

  public menuDefault: string = "#ffffff";
  public gameDefault: string = "#ffffff";
  constructor() { }
  ngOnInit() {
   
  }
  ngAfterViewInit() {

  }
}
