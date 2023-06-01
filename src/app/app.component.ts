import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme-app';
  darkThemeSelected =false ;
  purpleThemeSelected=false;

  switchTheme(event:any) {
    console.log('called')
    console.log(event)
    if(event.value==='pink'){
      this.darkThemeSelected =true ;
      this.purpleThemeSelected =false ;
    }else{
      this.purpleThemeSelected =true ;
      this.darkThemeSelected =false ;

    }

  }
}
