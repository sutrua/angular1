import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformsComponent } from './pages/artforms/artforms.component';

import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';

const routes: Routes = [

{
  path:'homepage', component:HomepageComponent

},
{
  path:'contactpage' , component:ContactpageComponent
 
},
{
  path:'signinpage' , component:SigninpageComponent
},

{
  path: 'loginpage' , component : LoginpageComponent

},

{
  path: 'artforms' , component : ArtformsComponent

},

{
  path: 'singlepage' , component : SinglepageComponent

}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
