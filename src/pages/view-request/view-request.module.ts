import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewRequest } from './view-request';

@NgModule({
  declarations: [
    ViewRequest,
  ],
  imports: [
    IonicPageModule.forChild(ViewRequest),
  ],
  exports: [
    ViewRequest
  ]
})
export class ViewRequestModule {}
