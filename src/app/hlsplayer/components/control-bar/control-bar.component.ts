import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { ControlConfigModel } from '../../models/control-config.models';
import { HlsplayerService } from '../../services/hlsplayer.service';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss']
})
export class ControlBarComponent implements OnInit, AfterViewInit {

  @Input('controlConfig') controlConfig: ControlConfigModel;

  @ViewChild('videoSeekBar') videoSeekBarWidget: ElementRef;
  @ViewChild('videoProgress') videoProgressWidget: ElementRef;
  @ViewChild('actionButton') actionButtonWidget: ElementRef;
  @ViewChild('volumeToggle') volumeToggleWidget: ElementRef;
  @ViewChild('volumeProgress') volumeProgressWidget: ElementRef;
  @ViewChild('volumeSeekBar') volumeSeekBarWidget: ElementRef;
  @ViewChild('mediaCurrentTime') mediaCurrentTimeWidget: ElementRef;
  @ViewChild('mediaDuration') mediaDurationWidget: ElementRef;

  volumePercent = 0;
  mediaCurrentTimePercent = 0;

  constructor(private hlsService: HlsplayerService) { }


  ngAfterViewInit() {

    // tslint:disable-next-line: max-line-length
    this.mediaCurrentTimePercent = this. hlsService.getSeekBarPercentage(this.controlConfig.mediaDuration, this.controlConfig.mediaCurrentTime);
    this.volumePercent = this.hlsService.getVolumePercentage(this.controlConfig.volumeLevel);
  }



  ngOnInit(): void {
  }

}
