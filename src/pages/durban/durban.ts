import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlashCardComponent } from '../../components/flash-card/flash-card';
import { MenuPage } from '../menu/menu'
/**
 * Generated class for the DurbanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-durban',
  templateUrl: 'durban.html',
})
export class DurbanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DurbanPage');
  }

  back(){
    this.navCtrl.push(MenuPage);
  }

}
