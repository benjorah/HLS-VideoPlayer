import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HourminutesecondPipe } from './pipes/hourminutesecond.pipe';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
  declarations: [HourminutesecondPipe, SliderComponent],
  imports: [
    CommonModule
  ],
  exports:[HourminutesecondPipe, SliderComponent]
})
export class SharedModule { }
