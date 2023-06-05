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

  ngOnInit(): void {

    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      console.log('dark')
    }else{
      console.log('light')
    }

    let myTheme = localStorage.getItem('currentTheme');
    if( myTheme === 'pink'){
      this.pinkThemeSelected =true ;
      this.purpleThemeSelected =false ;
      this.deepPurpleThemeSelected=false;
    }
    if( myTheme === 'purple'){
      this.purpleThemeSelected =true ;
      this.pinkThemeSelected =false ;
      this.deepPurpleThemeSelected=false;
    }

    if( myTheme === 'deepPurple'){
      this.deepPurpleThemeSelected=true;
      this.purpleThemeSelected =false ;
      this.pinkThemeSelected =false ;
    }


  }

  switchTheme(event:any) {
    let theme =event.value ;
    localStorage.setItem('currentTheme', theme);

    if(event.value==='pink' ){
      this.pinkThemeSelected =true ;
      this.purpleThemeSelected =false ;
      this.deepPurpleThemeSelected=false;
    }
    if(event.value==='purple' ){
      this.purpleThemeSelected =true ;
      this.pinkThemeSelected =false ;
      this.deepPurpleThemeSelected=false;
    }

    if(event.value==='deepPurple' ){
      this.deepPurpleThemeSelected=true;
      this.purpleThemeSelected =false ;
      this.pinkThemeSelected =false ;
    }


  }
}
