import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-grid',
  templateUrl: './tour-grid.component.html',
  styleUrls: ['./tour-grid.component.less']
})
export class TourGridComponent implements OnInit {

  tripType = '0';
  categoryType = '0';
  nameType = '0';
  ratingType = '0';
  popularityType = '0';

  constructor() { }

  ngOnInit() {
  }

}
