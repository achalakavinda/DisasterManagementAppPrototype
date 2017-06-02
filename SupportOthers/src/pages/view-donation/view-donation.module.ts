import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewDonation } from './view-donation';

@NgModule({
  declarations: [
    ViewDonation,
  ],
  imports: [
    IonicPageModule.forChild(ViewDonation),
  ],
  exports: [
    ViewDonation
  ]
})
export class ViewDonationModule {}
