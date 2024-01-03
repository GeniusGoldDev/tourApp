import { CustomerService } from './../../../../../../_services/customer.service';
import { Customer } from './../../../../../../_models/customer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UIHelper } from 'src/app/_helpers/ui.helper';
import { GrandServicesService } from 'src/app/_services/grandServices.service';
import { GrandService } from 'src/app/_models/grandService';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-grand-service-customer-list',
  templateUrl: './grand-service-customer-list.component.html',
  styleUrls: ['./grand-service-customer-list.component.less']
})
export class GrandServiceCustomerListComponent implements OnInit {
  formErrors: string[];
  grandService: GrandService;
  customers: any[] = [];
  filteredUsers: Customer[] = [];
  usersForm: FormGroup;
  isLoading = false;

  constructor(private uiHelper: UIHelper, private route: ActivatedRoute, private grandServicesService: GrandServicesService,
              private fb: FormBuilder, private customerService: CustomerService, public router: Router) { }

  ngOnInit() {
    this.usersForm = this.fb.group({
      userInput: null
    });
    this.usersForm
    .get('userInput')
    .valueChanges
    .pipe(
      debounceTime(300),
      tap(() => this.isLoading = true),
      switchMap(value => this.customerService.search(value)
      .pipe(
        finalize(() => this.isLoading = false),
        )
      )
    )
    .subscribe(users => this.filteredUsers = users);

    this.route.params.subscribe(params => {
      this.grandServicesService.get(params.name)
        .subscribe((data) => {
          this.grandService = data;

          this.grandServicesService.getCustomers(this.grandService.id).subscribe((passangers) => {
            this.customers = passangers;
          });
      });
   });
  }

  public editUserPurchase(customerId: number) {
    this.router.navigate(['/admin/tours', this.grandService.name, 'Customers', customerId]);
  }
}
