import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {InlineEditorModule} from 'ng2-inline-editor';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { GeneralInfoComponent } from './components/opportunity/general-info/general-info.component';
import { ProfileSidebarComponent } from './components/opportunity/profile-sidebar/profile-sidebar.component';

import { OpportunityService } from './services/opportunity.service';
import { InlineEditComponent } from './components/custom/inline-edit/inline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OpportunityComponent,
    GeneralInfoComponent,
    ProfileSidebarComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InlineEditorModule
  ],
  providers: [ OpportunityService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
