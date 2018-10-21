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
    const modal = this.modalCtr.create(WordPage);
    modal.present();
  }



}
