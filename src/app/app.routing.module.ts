import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { OsMainComponent } from './components/pages/os-main.component';
import { OsIntroComponent } from './components/pages/os-intro.component';

const routes: Routes = [
    { path: '', redirectTo: '/Home', pathMatch:'full'   },
    { path: 'Home', component: OsMainComponent   },
    { path: 'Intro', component: OsIntroComponent },
    { path: '**', component: OsMainComponent }
];




@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule{


}

export const AppRoutingComponents = [OsMainComponent, OsIntroComponent]