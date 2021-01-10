import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { ParentComponent } from './components/parent.component';
import { SiblingComponent } from './components/sibling.component';
import { OsPage1Component } from './components/pages/os-page1.component';
import { OsPage2Component } from './components/pages/os-page2.component';
import { OsHeaderComponent } from './components/header/os-header.component';
import { OsFooterComponent } from './components/footer/os-footer.component';
import { OsMenuListComponent } from './components/header/os-menu-list.component';
import { OsMenuComponent } from './components/header/os-menu.component';
import { WindowsProcessingDirective } from './directives/winprocessing.directive';
import { MarqueeProcessingDirective } from './directives/marquee.processing.directive';
import { WindowFacadeDirective } from './directives/facade.directive';

import { FormsModule } from '@angular/forms';
import { DataService } from "./services/data.service";
import { UIRouterModule } from '@uirouter/angular';

import { HttpModule } from '@angular/http';
import { ErrorComponent } from './error.component';

import { HttpClientModule } from '@angular/common/http';
import { OSRSSService } from './services/rss.service';
import { AppRoutingModule, AppRoutingComponents } from './app.routing.module';


@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [UIRouterModule],
  providers: [
                DataService,
                OSRSSService
             ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    UserComponent,
    ParentComponent,
    SiblingComponent,
    AppRoutingComponents,
    OsPage1Component,
    OsPage2Component,
    OsHeaderComponent,
    OsFooterComponent,
    OsMenuComponent,
    OsMenuListComponent,
    WindowsProcessingDirective,
    MarqueeProcessingDirective,
    WindowFacadeDirective,
    ErrorComponent
  ]
})
export class AppModule { }
