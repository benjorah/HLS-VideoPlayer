import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-video-seekbar',
  templateUrl: './video-seekbar.component.html',
  styleUrls: ['./video-seekbar.component.scss']
})
export class VideoSeekbarComponent implements OnInit {

  @Input('heightInPx') heightInPx = 4;
  @Input('progressInPercent') progressInPercent;
  @Input('bufferInPercent') bufferInPercent;

  @Output('videoSeekBarChanged') videoSeekBaerChanged = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  sliderValueChanged(event) {
    this.videoSeekBaerChanged.emit(event);
  }

}
