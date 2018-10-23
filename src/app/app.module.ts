import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {TabsPage} from "../pages/tabs/tabs";
import {FavoritesPage} from "../pages/favorites/favorites";
import {LibraryPage} from "../pages/library/library";
import {SettingsPage} from "../pages/settings/settings";
import {WordsPage} from "../pages/words/words";
import {WordsService} from "../services/words";
import {WordPage} from "../pages/word/word";
import {SettingsService} from "../services/settings";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavoritesPage,
    LibraryPage,
    SettingsPage,
    WordPage,
    WordsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FavoritesPage,
    LibraryPage,
    SettingsPage,
    WordPage,
    WordsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WordsService, SettingsService
  ]
})
export class AppModule {}
