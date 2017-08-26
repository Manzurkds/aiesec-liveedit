import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptionsArgs } from '@angular/http';

@Injectable()
export class OpportunityService {

  headers: Headers;
  options: RequestOptions;
  accessToken: string;
  opportunityUrl: string;

  constructor(public http: Http) { 
    console.log("Opportunity service running");

    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
    this.opportunityUrl = "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/";
    this.accessToken = "dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c";
  }

  getOpportunity(id) {
    let url = this.opportunityUrl + id;
    return this.http.get(url, {params: {"access_token" : this.accessToken}})
      .map(res => res.json());
  }

  setValues(id, value, property) {
    let url = this.opportunityUrl + id;
    let param = {"access_token" : this.accessToken, "opportunity": { [property] : value }};
    let body = JSON.stringify(param);
    return this.http.patch(url, body, this.options)
    .map(res => res.json());
  }

  removeValues(id, value, property) {
    
  }
}
