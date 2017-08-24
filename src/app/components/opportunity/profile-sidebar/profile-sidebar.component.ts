import { Component, OnInit } from '@angular/core';
import { OpportunityComponent } from '../opportunity.component';
import {InlineEditorComponent} from 'ng2-inline-editor';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css']
})

export class ProfileSidebarComponent implements OnInit {

  opportunity: any;
  
  constructor(private opportunityComponent: OpportunityComponent) {
    this.opportunity = opportunityComponent.opportunity;
  }

  ngOnInit() {
  }
  name: string = 'Gottsohn';

  backgroundNameChanged(event) {
    let backgroundvalue = event.target.value;
    let id = event.target.parentElement.parentElement.parentElement.id;

    console.log(backgroundvalue, id);
  }

}
