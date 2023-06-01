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

    console.log(event)
    if(event.value==='pink'){
      this.pinkThemeSelected =true ;
      this.purpleThemeSelected =false ;
      this.deepPurpleThemeSelected=false;
    }
    if(event.value==='purple'){
      this.purpleThemeSelected =true ;
      this.pinkThemeSelected =false ;
      this.deepPurpleThemeSelected=false;
    }

    if(event.value==='deepPurple'){
      this.deepPurpleThemeSelected=true;
      this.purpleThemeSelected =false ;
      this.pinkThemeSelected =false ;
    }


  }
}
