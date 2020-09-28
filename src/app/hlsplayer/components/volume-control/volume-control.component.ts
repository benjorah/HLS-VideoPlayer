import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SliderEventModel } from '../../../shared/models/slider-event.model';

@Component({
  selector: 'app-volume-control',
  templateUrl: './volume-control.component.html',
  styleUrls: ['./volume-control.component.scss']
})
export class VolumeControlComponent implements OnInit {
  @Output('volumeBarChanged') volumeBarChanged= new EventEmitter();
  @Input('volumeLevelInPercent') volumeLevelInPercent = 30;

  volumeBeforeToggle;
  constructor() { }

  ngOnInit(): void {
  }

  toggleVolume(){

    if (this.volumeLevelInPercent!=0){
      this.volumeBeforeToggle = this.volumeLevelInPercent/100;
    }

    const sliderEvent: SliderEventModel = {
      newPositionRatio: this.volumeLevelInPercent == 0 ? this.volumeBeforeToggle : 0
    };

    this.volumeBarChanged.emit(sliderEvent);

  }


  sliderValueChanged(event: SliderEventModel){
    this.volumeBarChanged.emit(event);

  }
}
