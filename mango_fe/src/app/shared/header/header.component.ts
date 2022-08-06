import {Component, OnInit, VERSION} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Currency, Language} from "../../core/models/interfaces/basic-objects";
import {LanguageService} from "../../core/service/language/language.service";
import {CurrencyService} from "../../core/service/currency/currency.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {

  currLanguage$:Observable<Language> = null;
  availableLanguages$:Observable<Language[]> = null;
  currCurrency$:Observable<Currency> = null;
  availableCurrencies$:Observable<Currency[]> = null;

  constructor( private langSvc: LanguageService, private currSvc: CurrencyService) {
    this. showDropDown$ = new BehaviorSubject(false);
    this.currLanguage$ = this.langSvc.getCurrentLanguage();
    this.availableLanguages$ = this.langSvc.getAvailableLanguages();

    this.currCurrency$ = this.currSvc.getCurrCurrency();
    this.availableCurrencies$ = this.currSvc.getAvailableCurrencies();
  }

  pclass = ['red-snackbar'];
  version = VERSION;
  showDropDown$: BehaviorSubject<boolean>;
  chosenCurrency$ = new BehaviorSubject<Currency | null>(null);

  ngOnInit(): void {
  }

  toggleLanguage(language: Language) {
    this.langSvc.setCurrentLanguage(language);
  }

  getLanguages(): Observable<Language[]> {
    return this.availableLanguages$;
  }

  getCurrLanguage(): Observable<Language> {
    return this.currLanguage$;
  }

  getCurrencies(): Observable<Currency[]> {
    return this.availableCurrencies$;
  }

  getCurrCurrency(): Observable<Currency> {
    return this.currCurrency$;
  }

  toggleCurrency(currency: Currency) {
    this.currSvc.setCurrentCurrency(currency);
  }
}
