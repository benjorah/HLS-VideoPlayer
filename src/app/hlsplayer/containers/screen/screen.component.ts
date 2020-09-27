import {
  AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy, ChangeDetectorRef,
  Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges
} from '@angular/core';
import { ControlConfigModel } from '../../models/control-config.models';
import { MediaModel } from '../../models/media.model';
import { QualityLevel } from '../../models/quality-level.model';
import { SliderEventModel } from '../../models/slider-event.model';
import { HlsplayerService } from '../../services/hlsplayer.service';


declare var Hls;

@Component({
  selector: 'app-hls-video-player',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('videoWidget') videoWidget: ElementRef;
  @Input('media') media: MediaModel;
  @Output('mediaFinished') mediaFinished = new EventEmitter();
  videoPlayer;
  mediaIsPlaying = true;
  makePlayerNaked = false;
  videoIsBuffering = false;
  checkInterval = 300.0; // check every 50 ms (do not use lower values)
  lastPlayPos = 0;
  currentPlayPos = 0;
  controlConfig: ControlConfigModel = {
    isPlaying: false,
    volumeLevelPercent: 0,
    mediaDuration: 0,
    mediaCurrentTime: 0,
    mediaCurrentTimePercent: 0,
    bufferedTimePercent: 0,
    qualityLevels: []
  };
  hls;
  constructor(
    private changeDetector: ChangeDetectorRef,
    private hlsService: HlsplayerService
  ) { }
  ngOnInit(): void {
    // setInterval(this.checkForBuffering.bind(this), this.checkInterval);


  }
  ngOnDestroy(): void {
    this.hls.detachMedia();
  }


  ngAfterViewInit() {
    this.videoPlayer = this.videoWidget.nativeElement;
    this.videoPlayer.muted = true;

    if (Hls.isSupported()) {

      this.hls = this.hlsService.preparePlayerForNewStream(new Hls(), this.videoPlayer);

      this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log('video and hls.js are now bound together !');
        this.hls.loadSource(this.media.link);
      });
      this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        this.videoPlayer.play();

        const levels = data.levels.map((level: QualityLevel, index) => ({ level: index, resHeight: level.height }));
        this.controlConfig = { ...this.controlConfig, qualityLevels: levels };
      });

      this.hls.on(Hls.Events.LEVEL_SWITCHING, (event, data: QualityLevel) => {
        this.controlConfig = { ...this.controlConfig, currentQualityHeight: data.height };

      });


    } else if (this.videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
      this.videoPlayer.src = this.media.link;
      this.videoPlayer.addEventListener('loadedmetadata', () => {
        this.videoPlayer.play();

      });
    }

  }


  ngOnChanges(changes: SimpleChanges) {

    if (this.videoPlayer) {

      this.hls.detachMedia();
      this.hlsService.preparePlayerForNewStream(this.hls, this.videoPlayer);

    }


  }





  // Check if video is playing
  playListener() {
    this.controlConfig = { ...this.controlConfig, isPlaying: true };
    this.mediaIsPlaying = true;
    this.videoIsBuffering = false;
    this.videoPlayer.muted = false;
  }

  endedListener() {
    this.controlConfig = { ...this.controlConfig, isPlaying: false };
    this.mediaIsPlaying = false;

    if (this.controlConfig.mediaCurrentTime != 0) {

      this.mediaFinished.emit();
    }


  }

  // update volume
  volumeChangeListener() {
    const volumeLevel = this.videoPlayer.volume;
    this.controlConfig = { ...this.controlConfig, volumeLevelPercent: this.hlsService.getVolumePercentage(volumeLevel) };
  }

  // update current time
  timeUpdateListener() {
    const currentTimeInSeconds = this.videoPlayer.currentTime;
    const mediaCurrentTimePercent = this.hlsService.getSeekBarPercentage(this.controlConfig.mediaDuration, currentTimeInSeconds);
    const bufferedTimePercent = this.videoPlayer.buffered.length > 0 ?
    this.hlsService.getSeekBarPercentage(this.controlConfig.mediaDuration, this.videoPlayer.buffered.end(0)) : 0;

    this.controlConfig = { ...this.controlConfig, mediaCurrentTime: currentTimeInSeconds, mediaCurrentTimePercent, bufferedTimePercent };

  }

  // update the total duration
  loadedDataListener() {
    const totalDurationInSeconds = this.videoPlayer.duration;
    this.controlConfig = { ...this.controlConfig, mediaDuration: totalDurationInSeconds };
  }

  loadedMetaDataListener() {
    console.log('loadedMetaData listener');
  }

  // heck if video is paused
  pauseListener() {
    this.controlConfig = { ...this.controlConfig, isPlaying: false };
    this.mediaIsPlaying = false;
  }

  bufferListener() {
    this.videoIsBuffering = true;
  }

  detectMousePresence() {

    this.makePlayerNaked = false;

  }

  detectMouseAbsence() {

    setTimeout(() => {
      this.makePlayerNaked = this.mediaIsPlaying;
    }, 300);


  }

  seekbarChanged(event: SliderEventModel) {
    this.videoPlayer.currentTime = event.newPositionRatio * this.controlConfig.mediaDuration;

  }

  volumeBarChanged(event: SliderEventModel) {
    this.videoPlayer.volume = event.newPositionRatio;
  }

  togglePlayerMode() {

    this.mediaIsPlaying ? this.videoPlayer.pause() : this.videoPlayer.play();

  }

  pictureQualityChanged(event: number) {

    this.hls.currentLevel = event;

  }



  // checkForBuffering() {
  //   this.currentPlayPos = this.controlConfig.mediaCurrentTime;

  //   // checking offset should be at most the check interval
  //   // but allow for some margin
  //   const offset = (this.checkInterval - 20) / 1000;

  //   // if no buffering is currently detected,
  //   // and the position does not seem to increase
  //   // and the player isn't manually paused...
  //   if (
  //     !this.videoIsBuffering
  //     && this.currentPlayPos == (this.lastPlayPos)
  //     && this.mediaIsPlaying
  //   ) {
  //     this.videoIsBuffering = true;
  //   }

  //   // if we were buffering but the player has advanced,
  //   // then there is no buffering
  //   if (
  //     this.videoIsBuffering
  //     && this.currentPlayPos > (this.lastPlayPos)
  //     && this.mediaIsPlaying
  //   ) {
  //     this.videoIsBuffering = false;
  //   }
  //   this.lastPlayPos = this.currentPlayPos;
  // }




}
