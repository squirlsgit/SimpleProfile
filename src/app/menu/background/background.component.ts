
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { environment } from '../../../environments/environment';




@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  @ViewChild('Menu') menuCanvas: ElementRef;
  @Input() defaultColor: string;
  constructor() { }

  ngOnInit() {
  }

}
