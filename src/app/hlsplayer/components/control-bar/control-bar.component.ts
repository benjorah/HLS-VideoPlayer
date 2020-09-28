import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { SliderEventModel } from 'src/app/shared/models/slider-event.model';
import { ControlConfigModel } from '../../models/control-config.models';
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

  }



  ngOnInit(): void {



  }

  mediaDurationChanged(event : number) {

    this.seekbarChanged.emit(event);
  }

  volumeLevelChanged(event){

    this.volumeBarChanged.emit(event);

  }



  toggleAction(){

    this.togglePlayerMode.emit();
  }

  qualityChanged(event){
    this.pictureQualityChanged.emit(event);
  }

}
