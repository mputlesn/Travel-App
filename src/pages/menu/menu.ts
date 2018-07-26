import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import user from '../user'
import { JoziPage } from '../jozi/jozi';
import { CapePage } from '../cape/cape';
import { DurbanPage } from '../durban/durban';
import { MpumalangaPage } from '../mpumalanga/mpumalanga';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  userDetails = user;
  name = this.userDetails[0];
  surname = this.userDetails[1];

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  destination(place){
    if(place == "jozi"){
      this.navCtrl.push(JoziPage);
    }else
    if(place == "cape"){
      this.navCtrl.push(CapePage);
    }else
    if(place == "durban"){
      this.navCtrl.push(DurbanPage);
    }else
    if(place == "mpumalanga"){
      this.navCtrl.push(MpumalangaPage);
    }else{
      alert("Incorrect");
    }
  }

}
