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

  test1: string = "Test1";
  test2: string = "Test2";
}
