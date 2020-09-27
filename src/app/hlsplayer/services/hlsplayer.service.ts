import { Injectable } from '@angular/core';
import { SliderEventModel } from '../models/slider-event.model';

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


 
}
