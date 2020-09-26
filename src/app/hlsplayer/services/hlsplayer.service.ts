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


  // getNewSliderPositionFromUserAction(sliderEventObject: SliderEventModel, videoPlayerOffsetLeft: number, totalSliderUnit: number ): number {

  //   // totalSliderUnit could be totalSeconds for a video or 100% for volumes
  //   // find the true X offset of the video seekbar in relation to it's container
  //   const tempSeekValue = sliderEventObject.newXPosition - videoPlayerOffsetLeft - sliderEventObject.sliderOffset;

  //   // find the true X offset as a ratio of it's width
  //   const trueSeekValue = tempSeekValue / sliderEventObject.sliderWidth;
  //   console.log(trueSeekValue);


  //   return trueSeekValue * totalSliderUnit;


  // }

}
