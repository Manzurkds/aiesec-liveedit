import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpportunityService } from '../../services/opportunity.service';
import { ListService } from '../../services/list.service';
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
  lists: {};

  constructor(private opportunityService: OpportunityService, private listService: ListService) { 
    this.href = window.location.href;
    this.opportunityId = Number(this.href.substr(-1, 1));
  }

  ngOnInit() {
    this.opportunityService.getOpportunity(this.opportunityId).subscribe((opportunityData) => {
      console.log(opportunityData);
      this.opportunity = opportunityData;
    });

    this.listService.getBackgrounds().subscribe((backgroundsList) => {
      this.lists = { ["backgrounds"]: backgroundsList };
    });
  }

    getOpportunityData() {
      return this.opportunity;
    }

    valueChanged(event) {
      
      let id = this.opportunity.id;
      let value = event.target.value;
      let property = event.target.parentElement.parentElement.parentElement.attributes.name.value;

      this.opportunityService.setValues(id, value, property).subscribe((result) => {
        console.log(result);
      });
    }
}