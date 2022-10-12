import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { ServiceComponent } from './components/service/service.component';
import { ServicedescriptionComponent } from './components/servicedescription/servicedescription.component';
import { ServiceproviderComponent } from './components/serviceprovider/serviceprovider.component';
import { SprovidersService } from './services/sproviders.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    ServiceComponent,
    ServicedescriptionComponent,
    ServiceproviderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,SprovidersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
