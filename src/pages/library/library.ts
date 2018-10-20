import {Component, OnInit} from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {Word} from "../../data/word.interface";
import words from "../../data/dailyword"
import {WordsPage} from "../words/words";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  wordsPage = WordsPage;
  wordCollection: { category: string, words: Word[], icon:string }[];

  ngOnInit(){
    this.wordCollection = words;
  }

}
