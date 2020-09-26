import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlConfigModel } from '../../models/control-config.models';


declare var Hls;

@Component({
  selector: 'app-hls-video-player',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit, AfterViewInit {
  @ViewChild('videoWidget') videoWidget: ElementRef;
  mediaIsPlaying = true;
  makePlayerNaked= false;
  controlConfig : ControlConfigModel={
    isPlaying: false,
    volumeLevel: .3,
    mediaDuration: 10,
    mediaCurrentTime: 4
  }

  constructor() { }


  ngAfterViewInit() {
    const video = this.videoWidget.nativeElement;
    const videoSrc = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
    // const videoSrc = 'file:///Users/okey/Documents/vault/hls_transcoder/hls_assets/master_6sec.m3u8';
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        this.video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', function () {
        this.video.play();
      });
    }

  }


  ngOnInit(): void {


  }

  detectMousePresence(){

    this.makePlayerNaked= false;

  }

  detectMouseAbsence(){

    setTimeout(()=>this.makePlayerNaked= this.mediaIsPlaying,300);


  }
}
