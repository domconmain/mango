import {InjectionToken} from "@angular/core";
import {HttpHeaders} from "@angular/common/http";

export const HEADERS = new HttpHeaders({'Content-Type': 'application/json'})
export const API_ENDPOINTS = new InjectionToken<IEndpoints>('api.constants');

export interface IEndpoints {
  currenciesApi: string;
  coursesApi: string;
  languagesApi: string;
}

export const Endpoints: IEndpoints = {
  coursesApi: '/student/{identityId}/courses',
  languagesApi: '/languages',
  currenciesApi: '/currencies'
}
