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

  descriptionChanged(event) {
    let id = this.opportunity.id;
    let value = event.target.value;
    
    console.log(id, value);

    this.opportunityService.setDescription(id, value).subscribe((result) => {
      console.log(result);
    });;
  }

}
