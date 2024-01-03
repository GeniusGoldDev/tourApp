import { GrandService } from './../../../../_models/grandService';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GrandServicesService } from 'src/app/_services/grandServices.service';

@Component({
  selector: 'app-grand-service-list',
  templateUrl: './grand-service-list.component.html',
  styleUrls: ['./grand-service-list.component.less']
})
export class GrandServiceListComponent implements OnInit {
  @ViewChild('tourName') tourName: ElementRef;

  originalGrandServicesList: GrandService[];
  grandServicesList: GrandService[];

  constructor(private grandServicesService: GrandServicesService) { }

  ngOnInit() {
    this.grandServicesService.getList()
      .subscribe((data) => {
        this.originalGrandServicesList = this.grandServicesList = data;
    });
  }

  search() {
    const name = this.tourName.nativeElement.value.toLowerCase();

    this.grandServicesList = this.originalGrandServicesList.filter(v =>
      v.name.toLowerCase().indexOf(name) > -1);
  }

  clear() {
    this.grandServicesList = this.originalGrandServicesList;
  }
}
