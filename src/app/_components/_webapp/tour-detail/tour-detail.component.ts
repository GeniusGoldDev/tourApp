import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.less']
})
export class TourDetailComponent implements OnInit {

  config = {
    slidesPerView: 3,
    navigation: {
      nextEl: '.owl-next',
      prevEl: '.owl-prev',
    },
  };

  adults = "0";
  kids = "0";

  constructor() { }

  ngOnInit() {
  }

}
