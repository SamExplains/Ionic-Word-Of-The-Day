import {Word} from "../data/word.interface";

export class WordsService{
  private favoriteWords: Word[] = [];

  addWordToFavorites(word: Word){
    this.favoriteWords.push(word);
    console.log(this.favoriteWords);
  }

  removeWordFromFavorites(word: Word){
    const pos = this.favoriteWords.findIndex((wordElem: Word) => {
      return wordElem.id == word.id;
    });
    this.favoriteWords.splice(pos, 1);
  }

  getFavoriteWords(){
    return this.favoriteWords.slice();
  }


}
