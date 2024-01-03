import { Component, OnInit } from '@angular/core';
import { GrandService } from 'src/app/_models/grandService';
import { FormBuilder } from '@angular/forms';
import { GrandServicesService } from 'src/app/_services/grandServices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UIHelper } from 'src/app/_helpers/ui.helper';


@Component({
  selector: 'app-grand-service-details',
  templateUrl: './grand-service-details.component.html',
  styleUrls: ['./grand-service-details.component.less']
})
export class GrandServiceDetailsComponent implements OnInit {
  grandService: GrandService;
  formErrors: string[];

  newGrandService = true;

  constructor(private grandServicesService: GrandServicesService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private router: Router, private uiHelper: UIHelper) { }

  ngOnInit() {
    this.formErrors = [];

    this.route.params.subscribe(params => {
      const grandServiceName = params.name;

      if (grandServiceName == '0') {
        this.grandService = new GrandService();
      } else {
        this.grandServicesService.get(grandServiceName)
          .subscribe((data) => {
            this.grandService = data;

            this.newGrandService = false;
        });
      }
   });
  }
}
