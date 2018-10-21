import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavParams} from 'ionic-angular';
import {Word} from "../../data/word.interface";

@IonicPage()
@Component({
  selector: 'page-words',
  templateUrl: 'words.html',
})
export class WordsPage implements OnInit{
  wordGroup: { category: string, words: Word[], icon:string };

  constructor(private navParams: NavParams, private alertCtr: AlertController) {
  }

  ngOnInit(){
    this.wordGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Word){
    const alert = this.alertCtr.create({
      title: 'Add Word',
      subTitle: 'Is that OK?',
      message: 'Is this the word you would like to favorite?',
      buttons: [{
        text: 'Sure',
        handler: () => {console.log('Clickity.')},
      },
      {
        text: 'Nope',
        role: 'cancel',
        handler: () =>{
          console.log('No clicked');
        }
      }
      ]
    });

    alert.present();


  }

  //Alternate method with the Elvis operator (?)
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad WordsPage');
  //   this.wordGroup = this.navParams.data;
  // }

}
