import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-booking',
  templateUrl: './tour-booking.component.html',
  styleUrls: ['./tour-booking.component.less']
})
export class TourBookingComponent implements OnInit {

  countryType = '0';
  cardType = '0';
  month1 = '0';
  month2 = '0';

  constructor() { }

  ngOnInit() {
  }

}
