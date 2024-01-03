import { Component, OnInit } from '@angular/core';
import { GrandService } from 'src/app/_models/grandService';
import { UIHelper } from 'src/app/_helpers/ui.helper';
import { ActivatedRoute, Router } from '@angular/router';
import { GrandServicesService } from 'src/app/_services/grandServices.service';
import { environment } from 'src/environments/environment.prod';
import { PriceModelService } from 'src/app/_services/priceModel.service';
import { PriceModel } from 'src/app/_models/priceModel';

@Component({
  selector: 'app-grand-service-pricing',
  templateUrl: './grand-service-pricing.component.html',
  styleUrls: ['./grand-service-pricing.component.less']
})
export class GrandServicePricingComponent implements OnInit {

  grandService: GrandService;
  priceModels: PriceModel[];
  formErrors: string[];

  roomOccupancyTypes: { value: number, name: string }[] = [
    { value: 1, name: 'Single' },
    { value: 2, name: 'Double' },
    { value: 3, name: 'Triple' },
    { value: 4, name: 'Quad' }
  ];

  constructor(private uiHelper: UIHelper, private route: ActivatedRoute, private grandServicesService: GrandServicesService,
              private priceModelService: PriceModelService) {}

  ngOnInit() {
    this.formErrors = [];

    this.route.params.subscribe(params => {
      this.grandServicesService.get(params.name)
        .subscribe((data) => {
          this.grandService = data;

          this.priceModelService.getByGrandService(this.grandService.id).subscribe(obj => {
            this.priceModels = obj;
          }, error => {
            this.addErrors(error.error);
          });
        }, error => {
          this.addErrors(error.error);
        });
      });
  }

  addErrors(errors: { [s: string]: {}; } | ArrayLike<{}>): void {
    Object.entries(errors).forEach(
      ([key, value]) => this.formErrors.push(key + ': ' + value));

    this.uiHelper.scrollToTop();
  }

  save() {
    this.formErrors = [];

    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const priceModel = new PriceModel();

      priceModel.id = Number((row.querySelector('[name="id"]') as HTMLInputElement).value);
      priceModel.roomOccupancy = Number((row.querySelector('[name="roomOccupancy"]') as HTMLInputElement).value);
      priceModel.regPrice = Number((row.querySelector('[name="regPrice"]') as HTMLInputElement).value);
      priceModel.discountPrice = Number((row.querySelector('[name="discountPrice"]') as HTMLInputElement).value);
      priceModel.grandServiceId = this.grandService.id;

      this.priceModelService.save(priceModel)
        .subscribe((res) => {
          console.log('saved');
      }, error => {
        this.addErrors(error.error);
      });
    });
  }
}
