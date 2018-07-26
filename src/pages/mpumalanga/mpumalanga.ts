import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu'
/**
 * Generated class for the MpumalangaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mpumalanga',
  templateUrl: 'mpumalanga.html',
})
export class MpumalangaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MpumalangaPage');
  }

  back(){
    this.navCtrl.push(MenuPage);
  }

}
