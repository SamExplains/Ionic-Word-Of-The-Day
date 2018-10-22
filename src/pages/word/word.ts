import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the WordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-word',
  templateUrl: 'word.html',
})
export class WordPage {

  person: string;
  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WordPage');
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onCloseModal(remove = false){
    this.viewCtrl.dismiss(remove);
  }

}
