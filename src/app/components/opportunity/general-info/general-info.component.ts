import { Component, OnInit } from '@angular/core';
import { OpportunityComponent } from '../opportunity.component';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  opportunity: any;

  constructor(private opportunityComponent: OpportunityComponent) {
    this.opportunity = opportunityComponent.opportunity;
  }

  ngOnInit() {
   
  }

}
