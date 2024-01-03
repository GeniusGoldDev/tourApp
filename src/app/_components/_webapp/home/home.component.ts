import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  imageUrlArray = [
    'assets/images/slide1.jpg',
    'assets/images/slide1.jpg',
    'assets/images/slide1.jpg',
    'assets/images/slide1.jpg',
    'assets/images/slide1.jpg',
    'assets/images/slide1.jpg',
    'assets/images/slide1.jpg'
  ];

  config = {
    observer: true,
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 5,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  };

  selected = '0';

  constructor() { }

  ngOnInit() {
  }

}
