import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewRequest page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-request',
  templateUrl: 'new-request.html',
})
export class NewRequest {

  form={
    name:'',
    tel:'',
    address:'',
    city:'',
    need:'',
    number_of_peoples:'',
    lng:'',
    lat:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRequest');
  }

}
