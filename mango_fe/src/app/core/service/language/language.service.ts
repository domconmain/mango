import { Injectable } from '@angular/core';
import {BehaviorSubject, filter, map, Observable, shareReplay, tap} from "rxjs";
import {Language} from "../../models/interfaces/basic-objects";
import {HEADERS} from "../../utils/api.constants";
import {HttpClient} from "@angular/common/http";
import {EnvironmentService} from "../environment/environment.service";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currLanguage$= new BehaviorSubject<Language>(null);
  private availableLanguages$:Observable<Language[]> = null;

  constructor(private http: HttpClient, private envSvc: EnvironmentService) {
    this.availableLanguages$ = this.loadLanguages();
  }

  private loadLanguages(): Observable<Language[]>{

    return this.http.get<Language[]>(this.envSvc.getLanguagesUrl()).pipe(
      tap((languages: Language[]) =>  this.currLanguage$.next(languages.filter(l => l.curr)[0])),
      shareReplay()
    )
  }

  public getAvailableLanguages(): Observable<Language[]>{
    return this.availableLanguages$;
  }
  public getCurrentLanguage(): Observable<Language>{
    return this.currLanguage$;
  }

  public setCurrentLanguage(language: Language) {
    this.currLanguage$.next(language);
    console.log("update current language")
    // this.http.post(this.envSvc.getLanguagesUrl(), language);
  }
}
