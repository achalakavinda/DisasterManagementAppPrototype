import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Donations } from './donations';

@NgModule({
  declarations: [
    Donations,
  ],
  imports: [
    IonicPageModule.forChild(Donations),
  ],
  exports: [
    Donations
  ]
})
export class DonationsModule {}
