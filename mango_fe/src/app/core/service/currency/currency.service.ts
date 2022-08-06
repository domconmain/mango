import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '../environment/environment.service';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {Currency, Language} from '../../models/interfaces/basic-objects';
import {HEADERS} from '../../utils/api.constants';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currCurrency$ = new BehaviorSubject<Currency >(null);

  constructor(private http: HttpClient, private envSvc: EnvironmentService) {
  }

  private loadCurrencies(): Observable<Currency[]>{
    return this.http.get<Currency[]>(this.envSvc.getCurrenciesUrl())
      .pipe(map(currencies => currencies.filter(l => {

        if(l.curr){
          this.currCurrency$.next(l);
        }
        return !l.curr
         })));
  }

  public getAvailableCurrencies(): Observable<Currency[]>{
    return this.loadCurrencies();
  }
  public getCurrCurrency(): Observable<Currency >{
    return this.currCurrency$.asObservable();
  }

  public setCurrentCurrency(currency: Currency) {
    this.currCurrency$.next(currency);
    console.log("update current currency")
    // this.http.post(this.envSvc.getLanguagesUrl(), language);
  }
}
