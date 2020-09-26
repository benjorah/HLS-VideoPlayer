import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourminutesecondPipe } from './pipes/hourminutesecond.pipe';



@NgModule({
  declarations: [HourminutesecondPipe],
  imports: [
    CommonModule
  ],
  exports:[HourminutesecondPipe]
})
export class SharedModule { }
