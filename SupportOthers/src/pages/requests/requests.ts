import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewRequest } from '../view-request/view-request';

/**
 * Generated class for the Requests page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html',
})
export class Requests {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Requests');
  }

  request_view(_id){
    this.navCtrl.push(ViewRequest);
  }

}
