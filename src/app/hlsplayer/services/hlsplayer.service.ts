import { Injectable } from '@angular/core';
import { MediaModel } from '../models/media.model';
import { SliderEventModel } from '../models/slider-event.model';
declare var Hls;

@Injectable({
  providedIn: 'root'
})
export class HlsplayerService {

  constructor() { }


  getSeekBarPercentage(totalTime, currentTime) {

    const calcPercentage = (currentTime / totalTime) * 100;
    return parseFloat(calcPercentage.toString());

  }

  getVolumePercentage(rawVolume) {

    return (rawVolume) * 100;

  }

  preparePlayerForNewStream(hls, videoPlayer: HTMLInputElement) {

    hls.attachMedia(videoPlayer);

    return hls;

  }


}
