import { Component } from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {Word} from "../../data/word.interface";
import {WordsService} from "../../services/words";
import {WordPage} from "../word/word";
import {root} from "rxjs/util/root";
import {SettingsService} from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  words: Word[];

  constructor(private wordService: WordsService, private modalCtr: ModalController, private settingsService: SettingsService){}

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

  getBackground(){
    return this.settingsService.isAlternateBackground() ? 'secondAppBackground' : '';
  }


}
