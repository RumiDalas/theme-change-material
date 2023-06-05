import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'theme-app';
  defaultThemeSelected=true;
  pinkThemeSelected =false ;
  purpleThemeSelected=false;
  deepPurpleThemeSelected=false;
  expression1=true;
  expression2=false;

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

    if( currentTheme === 'pink'){
      this.pinkThemeSelected =true ;
      this.deepPurpleThemeSelected=false;
    }

    if( currentTheme === 'deepPurple'){
      this.deepPurpleThemeSelected=true;
      this.pinkThemeSelected =false ;
    }

  }

  switchTheme(event:any) {
    let theme =event.value ;
    localStorage.setItem('currentTheme', theme);
    this.expression1=false;
    this.expression2=true;

    if(event.value==='system' ){
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        this.pinkThemeSelected =true ;
        this.deepPurpleThemeSelected=false;
      }else{
        this.deepPurpleThemeSelected=true;
        this.pinkThemeSelected =false ;
      }
      }

    if(event.value==='pink' ){
      this.pinkThemeSelected =true ;
      this.deepPurpleThemeSelected=false;
    }

    if(event.value==='deepPurple' ){
      this.deepPurpleThemeSelected=true;
      this.pinkThemeSelected =false ;
    }

  }
}
