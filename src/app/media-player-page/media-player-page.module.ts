import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaPlayerPageRoutingModule } from './media-player-page-routing.module';
import { HLSPlayerModule } from '../hlsplayer/hlsplayer.module';
import { MainComponent } from './containers/main/main.component';
import { MediaListComponent } from './components/media-list/media-list.component';


@NgModule({
  declarations: [MainComponent, MediaListComponent],
  imports: [
    CommonModule,
    MediaPlayerPageRoutingModule,
    HLSPlayerModule
  ]
})
export class MediaPlayerPageModule { }
