import { UIHelper } from './../../../../_helpers/ui.helper';
import { VendorsHelper } from './../../../../_helpers/vendors.helper';
import { VendorService } from './../../../../_services/vendor.service';
import { Vendor } from './../../../../_models/vendor';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.less']
})
export class VendorDetailsComponent implements OnInit {
  vendor: Vendor;
  form: FormGroup;
  vendorTypes: any[];
  formErrors: string[];

  constructor(private vendorService: VendorService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private router: Router, private vendorHelper: VendorsHelper,
              private uiHelper: UIHelper) { }

  ngOnInit() {
    this.formErrors = [];
    this.vendorTypes = this.vendorHelper.getTypes();

    this.route.params.subscribe(params => {
      const vendorName = params.name;

      if (vendorName == '0') {
        this.vendor = new Vendor();
        this.form = this.createFormGroup(this.formBuilder);
      } else {
        this.vendorService.get(vendorName)
          .subscribe((data) => {
            this.vendor = data;
            this.form = this.createFormGroup(this.formBuilder);
        });
      }
   });
  }

  save() {
    const newVendor: Vendor = this.form.value.vendor as Vendor;

    this.vendorService.save(newVendor)
      .subscribe((data) => {
        this.vendor = data;
        this.form = this.createFormGroup(this.formBuilder);

        this.router.navigate(['/admin/vendors']);
    }, error => {
      this.formErrors = [];
      Object.entries(error.error).forEach(
        ([key, value]) => this.formErrors.push(key + ': ' + value));

      this.uiHelper.scrollToTop();
    });
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      vendor: formBuilder.group(this.vendor)
    });
  }
}
