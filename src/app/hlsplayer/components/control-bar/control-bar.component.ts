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
  @Output('volumeBarChanged') volumeBarChanged = new EventEmitter();
  @Output('togglePlayerMode') togglePlayerMode = new EventEmitter();
  @Output('pictureQualityChanged') pictureQualityChanged = new EventEmitter();


  @ViewChild('videoSeekBar') videoSeekBarWidget: ElementRef;
  @ViewChild('videoProgress') videoProgressWidget: ElementRef;
  @ViewChild('videoBuffer') videoBufferWidget: ElementRef;
  @ViewChild('actionButton') actionButtonWidget: ElementRef;
  @ViewChild('volumeToggle') volumeToggleWidget: ElementRef;
  @ViewChild('volumeProgress') volumeProgressWidget: ElementRef;
  @ViewChild('volumeSeekBar') volumeSeekBarWidget: ElementRef;
  @ViewChild('mediaCurrentTime') mediaCurrentTimeWidget: ElementRef;
  @ViewChild('mediaDuration') mediaDurationWidget: ElementRef;
  @ViewChild('qualitySelect') qualitySelectWidget: ElementRef;


  volumeBeforeToggle=0;

  constructor() { }


  ngAfterViewInit() {

    console.log(this.qualitySelectWidget.nativeElement.click());

  }



  ngOnInit(): void {



  }

  mediaDurationChanged(event) {
    const sliderEvent: SliderEventModel = {
      newPositionRatio: event.offsetX / this.videoSeekBarWidget.nativeElement.clientWidth
    };
    this.seekbarChanged.emit(sliderEvent);
  }

  volumeLevelChanged(event){

    const sliderEvent: SliderEventModel = {
      newPositionRatio: event.offsetX / this.volumeSeekBarWidget.nativeElement.clientWidth
    };
    this.volumeBarChanged.emit(sliderEvent);

  }

  toggleVolume(){

    if (this.volumeProgressWidget.nativeElement.clientWidth!=0){
      this.volumeBeforeToggle = this.controlConfig.volumeLevelPercent/100;
    }

    const sliderEvent: SliderEventModel = {
      newPositionRatio: this.volumeProgressWidget.nativeElement.clientWidth==0? this.volumeBeforeToggle:0
    };

    this.volumeBarChanged.emit(sliderEvent);

    this.qualitySelectWidget.nativeElement.click();

  }

  toggleAction(){

    this.togglePlayerMode.emit();
  }

  qualityChanged(qualitySelect: HTMLInputElement){
    this.pictureQualityChanged.emit(Number(qualitySelect.value));
  }

}
