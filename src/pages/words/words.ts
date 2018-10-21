import {Component, OnInit} from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {Word} from "../../data/word.interface";

@IonicPage()
@Component({
  selector: 'page-words',
  templateUrl: 'words.html',
})
export class WordsPage implements OnInit{
  wordGroup: { category: string, words: Word[], icon:string };

  constructor(private navParams: NavParams) {
  }

  ngOnInit(){
    this.wordGroup = this.navParams.data;
  }

  onAddToFavorite(){

  }

  //Alternate method with the Elvis operator (?)
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad WordsPage');
  //   this.wordGroup = this.navParams.data;
  // }

}
