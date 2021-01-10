import {   Component, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'os-header',
  templateUrl: './os-header.component.html',
  styleUrls: ['./header.less', "../pages/pages.less"]
})

export class OsHeaderComponent implements AfterViewInit, AfterContentInit{


  constructor(){
    //console.log("OsHeaderComponent constructor");
  }

  ngAfterViewInit(){

  }

  headerLogoSource:string;

  ngAfterContentInit(){
   // console.log("header start");
    var rnd = Math.random();
    //console.log("rnd:" + rnd);
    if(rnd > .49999){
      this.headerLogoSource = "./assets/images/ThoughtPillRed.png";
     // console.log("Red start");
    }
    else {
      this.headerLogoSource = "./assets/images/ThoughtPillBlue.png";
     // console.log("Blue start");
    }

  }


}

