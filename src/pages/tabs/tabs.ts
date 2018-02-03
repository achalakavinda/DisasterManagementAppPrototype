import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { Requests } from  '../requests/requests';
import { Areas } from '../areas/areas';
import { Donations } from '../donations/donations';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Requests;
  tab3Root = Donations;
  tab4Root = Areas;
  mySelectedIndex:number;
  constructor(navParams:NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
