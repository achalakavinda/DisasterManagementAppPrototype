import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewRequest } from '../view-request/view-request';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  welcome={
    img:'https://dncache-mauganscorp.netdna-ssl.com/thumbseg/1350/1350687-bigthumbnail.jpg',
    heading:'ආයුබෝවන්!!!',
    Description:'අයහපත් කාලගුණ තත්වය හේතුවෙන් ආපදාවට පත්වූ ඔබේ අවශ්‍යතා සහ මේ මොහොතේ ඔවුන්ට උපකාර කිරීමට සූදානම් ඔබත් මුනගැස්සවීම ' +
    'සඳහා මෙම ජංගම යෙදුම නිර්මාණය කර ඇත. මෙම සේවාව 100% නොමිලේ වන අතර' +
    ' හුදෙක් ආධාර කලමනාකරණයට පහසුකවක් සැලසිම අපේ අරමුණයි. ' +
    'නුදුරු දිනයන් තුළ තවත් විශේෂාංග අතුළත් වනු ඇත.'
  }
  constructor(public navCtrl: NavController) {

  }

  request_view(val){
    console.log('click');
    this.navCtrl.push(ViewRequest);
  }

}
