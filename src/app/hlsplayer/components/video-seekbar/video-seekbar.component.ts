import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SliderEventModel } from 'src/app/shared/models/slider-event.model';

@Component({
  selector: 'app-video-seekbar',
  templateUrl: './video-seekbar.component.html',
  styleUrls: ['./video-seekbar.component.scss']
})
export class VideoSeekbarComponent implements OnInit {

  @Input('heightInPx') heightInPx = 4;
  @Input('progressInPercent') progressInPercent: number;
  @Input('bufferInPercent') bufferInPercentL : number;

  @Output('videoSeekBarChanged') videoSeekBaerChanged = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  sliderValueChanged(event : SliderEventModel) {
    this.videoSeekBaerChanged.emit(event);
  }

}
