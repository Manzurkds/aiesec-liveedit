import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { GeneralInfoComponent } from './components/opportunity/general-info/general-info.component';

import { OpportunityService } from './services/opportunity.service';
import { ListService } from './services/list.service';
import { InlineEditComponent } from './components/custom/inline-edit/inline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OpportunityComponent,
    GeneralInfoComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ OpportunityService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
