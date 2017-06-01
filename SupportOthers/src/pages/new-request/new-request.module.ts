import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewRequest } from './new-request';

@NgModule({
  declarations: [
    NewRequest,
  ],
  imports: [
    IonicPageModule.forChild(NewRequest),
  ],
  exports: [
    NewRequest
  ]
})
export class NewRequestModule {}
