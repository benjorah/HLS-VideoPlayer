import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HlsplayerService {

  constructor() { }


  getSeekBarPercentage(totalTime, currentTime) {

    const calcPercentage = (currentTime / totalTime) * 100;
    return parseFloat(calcPercentage.toString());

  }

  getVolumePercentage(rawVolume){

    return rawVolume * 100;

  }

}
