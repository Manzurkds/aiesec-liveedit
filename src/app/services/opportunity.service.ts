import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptionsArgs } from '@angular/http';

@Injectable()
export class OpportunityService {

  constructor(public http: Http) { 
    console.log("Opportunity service running");
  }

  getOpportunity(opportunityId) {
    return this.http.get('http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/' + opportunityId, {params: {"access_token" : "dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c"}})
      .map(res => res.json());
  }
}
