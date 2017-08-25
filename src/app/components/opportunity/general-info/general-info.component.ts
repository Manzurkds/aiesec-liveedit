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
  lists: any;
  editing: {};
  error: {};
  backgroundRequired: any;

  constructor(private opportunityComponent: OpportunityComponent, private opportunityService: OpportunityService) {
    this.opportunity = opportunityComponent.opportunity;
    this.lists = opportunityComponent.lists;
  }

  ngOnInit() {
   
  }

  valueChanged(event) {
    
    let id = this.opportunity.id;
    let value = event.target.value;
    let property = event.target.parentElement.parentElement.parentElement.attributes.name.value;

    this.opportunityService.setValues(id, value, property).subscribe((result) => {
      console.log(result);
    });
  }

  toggleInput(event) {
    let property = event.target.id;

    if(this.editing && this.editing[property] === false) {
      this.editing = {[property]: true};
    } else {
      this.editing = {[property]: false};
    }

  }

  setBackgrounds(event) {

    let backgroundId = event.target.value; //Gets objects numeric id
    let property = event.target.name; //Gets properties generic names eg. backgrounds, skills, etc
    let matchedProperty = 'required' + property[0].toUpperCase() + property.substr(1); // match the property to check for required and preferred

    let isNew = this.opportunityComponent.checkForDuplicates(backgroundId, property);

    if(isNew) {
      let id = this.opportunity.id;
      let value = event.target.selectedOptions[0].text; //value(name) of the seleced backgrounds, skills, etc
      let option = this.editing[matchedProperty] ? 'required': 'preferred';
  
      let object = {"id": backgroundId, "name": value, "option": option};
  
      let array = this.opportunity[property];
      array.push(object); 
  
      this.opportunityService.setValues(id, array, property).subscribe((result) => {
          console.log(result);
      }, (Error) => {
          let error = Error.json().error;
          console.log(error);
          this.error = {[matchedProperty]: error};
      });
    } else {
      let error = "This field is already selected!"
      this.error = {[matchedProperty]: error};
    }
    
  }

}
