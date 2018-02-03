import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewDonation } from '../view-donation/view-donation';

/**
 * Generated class for the Donations page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-donations',
  templateUrl: 'donations.html',
})
export class Donations {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Donations');
  }

  donation_view(_id){
    this.navCtrl.push(ViewDonation);
  }

}
