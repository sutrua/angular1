import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { NavbarComponent } from "./units/navbar/navbar.component";
import { FooterComponent } from './units/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { ArtformsComponent } from './pages/artforms/artforms.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactpageComponent,
        LoginpageComponent,
        SigninpageComponent,
        HomepageComponent,
        NavbarComponent,
        FooterComponent,
        SinglepageComponent,
        ArtformsComponent,
        
    
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        
    ]
})
export class AppModule { }
