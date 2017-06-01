import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewDonation } from './new-donation';

@NgModule({
  declarations: [
    NewDonation,
  ],
  imports: [
    IonicPageModule.forChild(NewDonation),
  ],
  exports: [
    NewDonation
  ]
})
export class NewDonationModule {}
