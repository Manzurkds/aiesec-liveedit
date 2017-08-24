import { Component, OnInit } from '@angular/core';
import { OpportunityComponent } from '../opportunity.component';
import { OpportunityService } from '../../../services/opportunity.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
  opportunity: any;

  constructor(private opportunityComponent: OpportunityComponent, private opportunityService: OpportunityService) {
    this.opportunity = opportunityComponent.opportunity;
  }

  ngOnInit() {
   
  }

  valueChanged(event) {
    
    let id = this.opportunity.id;
    let value = event.target.value;
    let property = event.target.parentElement.parentElement.parentElement.attributes.name.value;


    this.opportunityService.setSuperficialValues(id, value, property).subscribe((result) => {
      console.log(result);
    });;
  }

}
