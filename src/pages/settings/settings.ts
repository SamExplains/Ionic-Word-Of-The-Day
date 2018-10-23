import { Component } from '@angular/core';
import {IonicPage, Toggle} from 'ionic-angular';
import {SettingsService} from '../../services/settings';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle){
    this.settingService.setBackground(toggle.checked);
    console.log(toggle);
  }

  checkAlternateBackground(){
    console.log('We got a ' + this.settingService.isAlternateBackground() );
    this.settingService.isAlternateBackground();
  }


}
