import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpportunityService } from '../../services/opportunity.service';
import {InlineEditorComponent} from 'ng2-inline-editor';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})

export class OpportunityComponent implements OnInit {
  href:string;
  opportunityId:number;
  opportunity: any;

  constructor(private opportunityService: OpportunityService) { 
    console.log("Service running..");
    console.log(window.location.href);
    this.href = window.location.href;
    this.opportunityId = Number(this.href.substr(-1, 1));
    console.log(this.opportunityId);
  }

  ngOnInit() {
    this.opportunityService.getOpportunity(this.opportunityId).subscribe((opportunityData) => {
      console.log(opportunityData);
      this.opportunity = opportunityData;
    });
  }

    getOpportunityData() {
      return this.opportunity;
    }
}