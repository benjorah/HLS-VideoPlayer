import { Component, OnInit } from '@angular/core';
import { MediaItemModel } from '../../models/media-item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentlyPlaying = 0;
  currentMediaObj: MediaItemModel;

  mediaItems: MediaItemModel[] = [
    {
      name: "Star Trek",
      datePublished: "25/17/2020",
      link: "https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8"
    },
    {
      name: "Sintel",
      datePublished: "25/17/2020",
      link: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    },
    {
      name: "Elephants Dream",
      datePublished: "25/17/2020",
      link: "https://wowzaec2demo.streamlock.net/vod-multitrack/_definst_/smil:ElephantsDream/elephantsdream2.smil/playlist.m3u"
    },
    {
      name: "CNN Special Report",
      datePublished: "25/17/2020",
      link: "https://playertest.longtailvideo.com/adaptive/captions/playlist.m3u8"
    },
    {
      name: "Big Buck Bunny",
      datePublished: "20/17/2020",
      link: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"

    },
    {
      name: "Streaming Ad",
      datePublished: "25/17/2020",
      link: "https://playertest.longtailvideo.com/adaptive/vod-with-mp3/manifest.m3u8"
    },
    {
      name: "Parkour",
      datePublished: "25/17/2020",
      link: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s-fmp4/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
    },
    {
      name: "Record and Timer",
      datePublished: "25/17/2020",
      link: "https://test-streams.mux.dev/pts_shift/master.m3u8"
    },
    {
      name: "Audio Music",
      datePublished: "25/17/2020",
      link: "https://s3.amazonaws.com/qa.jwplayer.com/~alex/121628/new_master.m3u8"
    }
  ];
  constructor() { }

  ngOnInit(): void {


    this.currentMediaObj=this.mediaItems[0];
  }

  selectNewMedia(){
    this.currentlyPlaying+=1;

    if(this.currentlyPlaying >= this.mediaItems.length){
      this.currentlyPlaying=0;
    }
    this.currentMediaObj=this.mediaItems[this.currentlyPlaying];
  }

  mediaClicked(mediaIndex){
    this.currentlyPlaying=mediaIndex;
    this.currentMediaObj=this.mediaItems[this.currentlyPlaying];
  }
}
