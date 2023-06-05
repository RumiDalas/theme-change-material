import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'theme-app';

  defaultThemeSelected=false;
  pinkThemeSelected =false ;
  deepPurpleThemeSelected=false;


  ngOnInit(): void {
    let currentTheme = localStorage.getItem('currentTheme');
    console.log('====currentTheme', currentTheme)

    if(!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches){
      console.log('dark')
      this.pinkThemeSelected =true ;
      this.deepPurpleThemeSelected=false;
    }else{
      console.log('light')
      this.deepPurpleThemeSelected=true;
      this.pinkThemeSelected =false ;
    }

    if( currentTheme === 'dark'){
      this.pinkThemeSelected =true ;
      this.deepPurpleThemeSelected=false;
    }

    if( currentTheme === 'light'){
      this.deepPurpleThemeSelected=true;
      this.pinkThemeSelected =false ;
    }

  }

  switchTheme(event:any) {
    console.log( event)
    let theme =event;
    localStorage.setItem('currentTheme', theme);

    if(event ==='system' ){

      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        this.pinkThemeSelected =true ;
        this.deepPurpleThemeSelected=false;
      }else{
        this.deepPurpleThemeSelected=true;
        this.pinkThemeSelected =false ;
      }
      }

    if(event ==='dark' ){
      this.pinkThemeSelected =true ;
      this.deepPurpleThemeSelected=false;
    }

    if(event ==='light' ){
      this.deepPurpleThemeSelected=true;
      this.pinkThemeSelected =false ;
    }

  }
}
