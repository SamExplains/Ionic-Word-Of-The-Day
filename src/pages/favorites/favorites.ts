import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Word} from "../../data/word.interface";
import {WordsService} from "../../services/words";
import {WordPage} from "../word/word";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  words: Word[];

  constructor(private wordService: WordsService, private modalCtr: ModalController){}

  ionViewWillEnter(){
    this.words = this.wordService.getFavoriteWords();
  }

  onViewWord(word: Word){
    const modal = this.modalCtr.create(WordPage, word);
    modal.present();
    modal.onDidDismiss((remove: boolean ) => {
     if (remove) {
       this.wordService.removeWordFromFavorites(word);
       const pos = this.words.findIndex( (wordEl: Word) => {
         return wordEl.id == word.id;
       });
        this.words.splice(pos,1);
        console.log(remove);
     }
      console.log("Blank");
    });
  }



}
