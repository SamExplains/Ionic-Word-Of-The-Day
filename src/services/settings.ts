export class SettingsService {
  private alternateBackground = false;

  setBackground(isAlt: boolean){
    this.alternateBackground = isAlt;
  }

  isAlternateBackground(){
    return this.alternateBackground
  }

}
