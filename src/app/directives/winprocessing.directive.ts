import { 
    Directive , 
    ElementRef , 
    Renderer,
    HostListener,  
    OnInit
  } from '@angular/core';
import { ScrollingService } from '../services/ui/scrolling.service';
//import { ScrollingService } from '../services/scrolling.service';
  declare var $: any;


   @Directive({
    selector:"[windows-processing]",
  })
  
  export class WindowsProcessingDirective implements OnInit{ 

    scrollMessage:string;

    constructor(private el: ElementRef, private renderer: Renderer, private scrollSvc: ScrollingService) {
    
   
    }

    ngOnInit(){
      this.scrollSvc.curScrollMsg.subscribe(scrollMsg => this.scrollMessage = scrollMsg)
    }

    newMessage(message:string) {
      this.scrollSvc.changeMessage(message);
    }
  

  @HostListener('window:scroll', ['$event']) private onScroll($event:Event):void {
   // console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
    this.BackGroundParallaxScroll();
  }

    bckCenterDir: number = 1;
    bckCenter: number = 50;
    scrollPos: number = 0;
    scrollDy: number = 0;   
    scrollDp: number = 0;   
    w: Window = window;
    
      private BackGroundParallaxScroll() {
     //   console.log("BackGroundParallaxScroll");
       // let hFactor = window.innerHeight;
        let header = $('#header');
        let oldPos = this.scrollPos;
        this.scrollPos = window.pageYOffset;
        if(window.innerWidth < 992){

        if(this.scrollPos < 11){
          if(this.scrollMessage !== "") {
            this.newMessage("");
          }
        }else 
        if(this.scrollPos > 10 && this.scrollPos < 80){
          if(this.scrollMessage !== "stage1") {
            this.newMessage("stage1");
          }
        }
        else if(this.scrollPos > 81 && this.scrollPos <160){
          if(this.scrollMessage !== "stage2") {
            this.newMessage("stage2");
          }
        }
        else if(this.scrollPos > 161 && this.scrollPos <240){
          if(this.scrollMessage !== "stage3") {
            this.newMessage("stage3");
          }
        }
        else{// if(this.scrollPos > 246 && this.scrollPos <320){
          if(this.scrollMessage !== "stage4") {
            this.newMessage("stage4");
          }
        }
        // else{
        //   if(this.scrollMessage !== "") {
        //     this.newMessage("");
        //   }
        // }

      }





        this.scrollDy += this.scrollPos - oldPos;
        // parallax
        this.scrollDp = this.scrollPos/25;
          
         // var targetElem = $(document.body);
        var targetElem = $('.parallax1');
       
      //  const componentPosition = this.el.nativeElement.offsetTop
      //  const scrollPosition = window.pageYOffset


        var backgroundPos = targetElem.css('backgroundPositionY').split("%");
        backgroundPos[0] = this.bckCenter  + this.scrollDp ;
        var bkStr = backgroundPos[0] + "%";
     //  console.log("background-position-y: "+ bkStr);
       
        //Set the background position
        targetElem.css('backgroundPositionY', bkStr  );

        // scrolling down? - hide the menu if so...and we are far enough down the page
          if(this.scrollDy > 0){
             if(this.scrollPos > .7*header.height()){
               
                header.addClass('verticalClose');
                header.removeClass('verticalOpen');
                this.scrollDy = 0;
             }
 
          } else {
             // open the menu only after the user scrolls at least 40 pixels
             if(this.scrollDy < -40)
             {
                header.removeClass('verticalClose');
                header.addClass('verticalOpen');
                this.scrollDy = 0;
             }
          }
       }


  @HostListener('window:resize', ['$event']) 
  private onResize($event:Event):void {
    $('#footer-spacer').height($('footer').height());
    $('#header-spacer').height($('#header').height());
}
    }
   
