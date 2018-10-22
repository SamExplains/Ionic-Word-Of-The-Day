import { Component } from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {Word} from "../../data/word.interface";
import {WordsService} from "../../services/words";
import {WordPage} from "../word/word";
import {root} from "rxjs/util/root";

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
        this.onRemoveFromFavorites(word);
        console.log(remove);
     }
      console.log("Blank");
    });
  }

  onRemoveFromFavorites(word: Word){
    this.wordService.removeWordFromFavorites(word);
    const pos = this.words.findIndex( (wordEl: Word) => {
      return wordEl.id == word.id;
    });
    this.words.splice(pos,1);
  }


}
