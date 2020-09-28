import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SliderEventModel } from '../../models/slider-event.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input('sliderWidthInPercent') sliderWidthInPercent;
  @Input('sliderHeightInPx') sliderHeightInPx = 4;
  @Input('sliderColorInHex') sliderColorInHex = '#edf2f4';
  @Output('sliderValueChanged') sliderValueChanged = new EventEmitter();


  @ViewChild('sliderContainer') sliderWidget;



  constructor() { }

  ngOnInit(): void {
  }

  sliderChanged(event){

    const sliderEvent: SliderEventModel = {
      newPositionRatio: event.offsetX / this.sliderWidget.nativeElement.clientWidth
    };
    this.sliderValueChanged.emit(sliderEvent);

  }
}
