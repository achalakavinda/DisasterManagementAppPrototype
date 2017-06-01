import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Areas } from './areas';

@NgModule({
  declarations: [
    Areas,
  ],
  imports: [
    IonicPageModule.forChild(Areas),
  ],
  exports: [
    Areas
  ]
})
export class AreasModule {}
