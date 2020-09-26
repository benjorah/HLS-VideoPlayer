import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './containers/screen/screen.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HlsplayerService } from './services/hlsplayer.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ScreenComponent, ControlBarComponent, TopBarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[HlsplayerService],
  exports: [ScreenComponent]
})
export class HLSPlayerModule { }
