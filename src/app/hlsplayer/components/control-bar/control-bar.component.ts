import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ControlConfigModel } from '../../models/control-config.models';
import { SliderEventModel } from '../../models/slider-event.model';
import { HlsplayerService } from '../../services/hlsplayer.service';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss']
})
export class ControlBarComponent implements OnInit, AfterViewInit {

  @Input('controlConfig') controlConfig: ControlConfigModel;
  @Output('seekbarChanged') seekbarChanged = new EventEmitter();

  @ViewChild('videoSeekBar') videoSeekBarWidget: ElementRef;
  @ViewChild('videoProgress') videoProgressWidget: ElementRef;
  @ViewChild('actionButton') actionButtonWidget: ElementRef;
  @ViewChild('volumeToggle') volumeToggleWidget: ElementRef;
  @ViewChild('volumeProgress') volumeProgressWidget: ElementRef;
  @ViewChild('volumeSeekBar') volumeSeekBarWidget: ElementRef;
  @ViewChild('mediaCurrentTime') mediaCurrentTimeWidget: ElementRef;
  @ViewChild('mediaDuration') mediaDurationWidget: ElementRef;

  constructor() { }


  ngAfterViewInit() {

  }



  ngOnInit(): void {



  }

  mediaDurationChanged(event) {
    const sliderEvent: SliderEventModel = {
      newPositionRatio: event.offsetX / this.videoSeekBarWidget.nativeElement.clientWidth
    };
    this.seekbarChanged.emit(sliderEvent);
  }

}
