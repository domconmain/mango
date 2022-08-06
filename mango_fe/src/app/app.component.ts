import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MediaObserver, MediaChange} from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'domago_fe';
  mediaSub: Subscription;

  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.mediaSub =this.mediaObserver.asObservable().subscribe(
      (re) => console.log(re)
    );
  }


  ngOnDestroy(): void {
  }
}
