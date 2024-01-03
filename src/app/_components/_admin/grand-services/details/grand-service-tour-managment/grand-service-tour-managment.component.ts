import { Component, OnInit } from '@angular/core';
import { GrandService } from 'src/app/_models/grandService';
import { UIHelper } from 'src/app/_helpers/ui.helper';
import { ActivatedRoute, Router } from '@angular/router';
import { GrandServicesService } from 'src/app/_services/grandServices.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-grand-service-tour-managment',
  templateUrl: './grand-service-tour-managment.component.html',
  styleUrls: ['./grand-service-tour-managment.component.less']
})
export class GrandServiceTourManagmentComponent implements OnInit {

  grandService: GrandService;
  PickupUrl = '';
  PaxOneUrl = '';
  PaxCruiseUrl = '';
  BusUrl = '';


  constructor(private uiHelper: UIHelper, private route: ActivatedRoute, private grandServicesService: GrandServicesService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.grandServicesService.get(params.name)
        .subscribe((data) => {
          this.grandService = data;

          this.PickupUrl = environment.baseAPIUrl + '/grandservices/' + this.grandService.id + '/export/1';
          this.PaxOneUrl = environment.baseAPIUrl + '/grandservices/' + this.grandService.id + '/export/2';
          this.PaxCruiseUrl = environment.baseAPIUrl + '/grandservices/' + this.grandService.id + '/export/3';
          this.BusUrl = environment.baseAPIUrl + '/grandservices/' + this.grandService.id + '/export/4';
        });
      });
  }

}
