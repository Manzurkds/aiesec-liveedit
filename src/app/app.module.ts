import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { GeneralInfoComponent } from './components/opportunity/general-info/general-info.component';
import { ProfileSidebarComponent } from './components/opportunity/profile-sidebar/profile-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OpportunityComponent,
    GeneralInfoComponent,
    ProfileSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
