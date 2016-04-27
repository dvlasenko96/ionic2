import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the SimpleDoctorPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/simple-doctor/simple-doctor.html',
})
export class SimpleDoctorPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
    console.log(navParams);
  }
}
