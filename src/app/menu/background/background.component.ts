
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CanvasModule } from '../../CanvasModule';



@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent extends CanvasModule implements OnInit {
  @ViewChild('Menu') menuCanvas: ElementRef;

  constructor()
  {
    super(1, 0.2);
  }

  ngOnInit() {
  }

}
