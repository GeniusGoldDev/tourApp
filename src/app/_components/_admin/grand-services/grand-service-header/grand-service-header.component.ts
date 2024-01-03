import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grand-service-header',
  templateUrl: './grand-service-header.component.html',
  styleUrls: ['./grand-service-header.component.less']
})
export class GrandServiceHeaderComponent implements OnInit {

  @Input() grandServiceName: string;
  @Input() activeTab: number;
  newGrandService: boolean;
  constructor() { }

  ngOnInit() {
    if (this.grandServiceName == '' || this.grandServiceName == '0') {
      this.newGrandService = true;
    } else {
      this.newGrandService = false;
    }

    document.getElementsByClassName('tournav')[this.activeTab].classList.add('active');
  }
}
