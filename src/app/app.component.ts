import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme-app';
  pinkThemeSelected =false ;
  purpleThemeSelected=false;
  deepPurpleThemeSelected=false;


  switchTheme(event:any) {
    let theme =event.value ;
    // localStorage.setItem('userId', 'a');
    localStorage.setItem('currentTheme', theme);
    let myTheme = localStorage.getItem('currentTheme');
    console.log('=======myTheme', myTheme)

    if(event.value==='pink' && myTheme === 'pink'){
      this.pinkThemeSelected =true ;
      this.purpleThemeSelected =false ;
      this.deepPurpleThemeSelected=false;
    }
    if(event.value==='purple' && myTheme === 'purple'){
      this.purpleThemeSelected =true ;
      this.pinkThemeSelected =false ;
      this.deepPurpleThemeSelected=false;
    }

    if(event.value==='deepPurple' && myTheme === 'deepPurple'){
      this.deepPurpleThemeSelected=true;
      this.purpleThemeSelected =false ;
      this.pinkThemeSelected =false ;
    }


  }
}
