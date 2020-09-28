import { Injectable } from '@angular/core';
import { MediaModel } from '../models/media.model';
declare var Hls;

@Injectable({
  providedIn: 'root'
})
export class HlsplayerService {

  constructor() { }


  getSeekBarPercentage(totalTime: number, currentTime: number) {

    const calcPercentage = (currentTime / totalTime) * 100;
    return parseFloat(calcPercentage.toString());

  }

  getVolumePercentage(rawVolume : number) {

    return (rawVolume) * 100;

  }

  preparePlayerForNewStream(hls, videoPlayer: HTMLInputElement) {

    hls.attachMedia(videoPlayer);

    return hls;

  }


}
