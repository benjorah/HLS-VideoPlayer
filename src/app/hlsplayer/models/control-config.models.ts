

export interface ControlConfigModel {

  isPlaying : boolean;
  volumeLevelPercent : number;
  mediaDuration : number;
  mediaCurrentTime : number ;
  mediaCurrentTimePercent : number ;
  bufferedTimePercent:number;
  qualityLevels:{level:number,resHeight:number}[];
  currentQualityHeight?: number;

}
