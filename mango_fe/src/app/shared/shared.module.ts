import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CoreModule} from '../core/core.module';
import {MatDividerModule} from "@angular/material/divider";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
    imports: [
        CommonModule,
        CoreModule,
        MatToolbarModule,
        MatIconModule,
        MatSliderModule,
        MatMenuModule,
        MatFormFieldModule,
        MatSelectModule,
        FlexLayoutModule,
        FontAwesomeModule,
        MatDividerModule
    ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
