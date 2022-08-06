import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [CommonModule, FontAwesomeModule, HttpClientModule],
  declarations: [],
})
export class CoreModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium,
      faFacebook,
      faTwitter,
      faYoutube,
      faLinkedin,
      faInstagram
    );
  }
}
