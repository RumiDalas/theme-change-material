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
  lightBg=false
  darkBg=false
  systemBg=false


  ngOnInit(): void {
    this.initTheme();
  }

  initTheme(){
    let currentTheme = localStorage.getItem('currentTheme');
    console.log('====currentTheme', currentTheme)

    if(!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches){
      console.log('dark')
      this.systemBg=true ;
      this.darkBg=false;
      this.lightBg=false;

      this.pinkThemeSelected =true ;
      this.deepPurpleThemeSelected=false;
    }else{
      this.systemBg=true ;
      this.darkBg=false;
      this.lightBg=false;
      console.log('light')
      this.deepPurpleThemeSelected=true;
      this.pinkThemeSelected =false ;
    }

    if( currentTheme === 'dark'){
      this.systemBg=false ;
      this.darkBg=true;
      this.lightBg=false;
      this.pinkThemeSelected =true ;
      this.deepPurpleThemeSelected=false;
    }

    if( currentTheme === 'light'){
      this.systemBg=false ;
      this.darkBg=false;
      this.lightBg=true;
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
        this.systemBg=true ;
        this.darkBg=false;
        this.lightBg=false;
        this.pinkThemeSelected =true ;
        this.deepPurpleThemeSelected=false;
      }else{
        this.systemBg=true ;
        this.darkBg=false;
        this.lightBg=false;
        this.deepPurpleThemeSelected=true;
        this.pinkThemeSelected =false ;
      }
      }

    if(event ==='dark' ){
      this.systemBg=false ;
      this.darkBg=true;
      this.lightBg=false;
      this.pinkThemeSelected =true ;
      this.deepPurpleThemeSelected=false;
    }

    if(event ==='light' ){
      this.systemBg=false ;
      this.darkBg=false;
      this.lightBg=true;
      this.deepPurpleThemeSelected=true;
      this.pinkThemeSelected =false ;
    }

  }
}
