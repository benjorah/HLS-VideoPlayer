import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-quality-control',
  templateUrl: './picture-quality-control.component.html',
  styleUrls: ['./picture-quality-control.component.scss']
})
export class PictureQualityControlComponent implements OnInit {

  @Input('qualityLevels') qualityLevels: { level: number, resHeight: number } ;
  @Input('currentQualityHeight') currentQualityHeight: number;
  @Output('pictureQualityChanged') pictureQualityChanged = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  qualityChanged(qualitySelect: HTMLInputElement){
    this.pictureQualityChanged.emit(Number(qualitySelect.value));
  }

}
