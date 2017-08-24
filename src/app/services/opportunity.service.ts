import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptionsArgs } from '@angular/http';

@Injectable()
export class OpportunityService {

  headers: Headers;
  options: RequestOptions;

  constructor(public http: Http) { 
    console.log("Opportunity service running");

    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getOpportunity(id) {
    let url = "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/" + id;
    return this.http.get(url, {params: {"access_token" : "dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c"}})
      .map(res => res.json());
  }

  setDescription(id, value) {
    console.log("inside set description");
    let url = "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/" + id;
    let param = {"access_token" : "dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c", "opportunity": {"description": value}};
    let body = JSON.stringify(param);
    return this.http.patch(url, body, this.options)
    .map(res => res.json());
  }

  setSuperficialValues(id, value, property) {
    let url = "http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities/" + id;
    let param = {"access_token" : "dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c", "opportunity": { [property] : value }};
    let body = JSON.stringify(param);
    return this.http.patch(url, body, this.options)
    .map(res => res.json());
  }
}
