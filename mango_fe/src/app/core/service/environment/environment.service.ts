import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Endpoints} from "../../utils/api.constants";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  urlAddress: string = environment.urlAddress;

  creatRoute(route:string):string {
    return `${this.urlAddress}/${route}`;
  }

  creatRouteByRoute(urlAddress:string, route:string):string {
    return `${urlAddress}/${route}`;
  }

  getLanguagesUrl():string {
    return `${environment.urlDomagoBE}${Endpoints.languagesApi}`
  }

  getCurrenciesUrl() {
    return `${environment.urlDomagoBE}${Endpoints.currenciesApi}`
  }
}
