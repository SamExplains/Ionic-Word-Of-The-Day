import {Component, OnInit} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {Word} from "../../data/word.interface";
import words from "../../data/dailyword"
/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  wordCollection: { category: string, words: Word[], icon:string }[];

  ngOnInit(){
    this.wordCollection = words;
  }

}
