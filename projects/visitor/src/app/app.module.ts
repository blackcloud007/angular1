import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VisitorRegisterComponent } from './visitor-register/visitor-register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule,Routes } from '@angular/router';
import { ShowVisitorsComponent } from './show-visitors/show-visitors.component';

const routes:Routes=[
{path:'login',component:LoginComponent},
{path:'register',component:RegistrationComponent},
{path:'visitor-register',component:VisitorRegisterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisitorRegisterComponent,
    LoginComponent,
    FooterComponent,
    RegistrationComponent,
    ShowVisitorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
