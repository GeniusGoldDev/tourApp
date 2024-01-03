import { Customer } from 'src/app/_models/customer';
import { CustomerService } from 'src/app/_services/customer.service';
import { UIHelper } from './../../../../_helpers/ui.helper';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.less']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  form: FormGroup;
  formErrors: string[];

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder,
              private route: ActivatedRoute, private router: Router,
              private uiHelper: UIHelper) { }

  ngOnInit() {
    this.formErrors = [];

    this.route.params.subscribe(params => {
      const customerId = params.id;

      if (customerId === '0') {
        this.customer = new Customer();
        this.form = this.createFormGroup(this.formBuilder);
      } else {
        this.customerService.get(customerId)
          .subscribe((data) => {
            this.customer = data;
            this.form = this.createFormGroup(this.formBuilder);
            if (this.customer.passportPhotoFile) {
              setTimeout(() => {
                document.getElementById('passportImg').setAttribute('src', this.customer.passportPhotoFile);
              }, 100);
            }
        });
      }
    });
  }

  save() {
    const newcustomer: Customer = this.form.value.customer as Customer;

    newcustomer.roles = [];
    newcustomer.browsedServices = [];
    newcustomer.lastReached = null;

    this.customerService.save(newcustomer)
      .subscribe((data) => {
        this.customer = data;
        this.form = this.createFormGroup(this.formBuilder);

        this.router.navigate(['/admin/customers']);
    }, error => {
      this.formErrors = [];
      Object.entries(error.error).forEach(
        ([key, value]) => this.formErrors.push(key + ': ' + value));

      this.uiHelper.scrollToTop();
    });
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      customer: formBuilder.group(this.customer)
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        const control = this.form.controls.customer as FormGroup;
        const img = reader.result.toString();

        document.getElementById('passportImg').setAttribute('src', img);

        control.patchValue({
          passportPhotoFile: img
        });
      };

      this.form.markAsDirty();
    }
  }

}
