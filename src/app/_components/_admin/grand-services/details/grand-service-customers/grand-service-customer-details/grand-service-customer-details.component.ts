import { CustomerPayment } from './../../../../../../_models/customerPayment';
import { ProductType } from './../../../../../../_helpers/product.helper';
import { Customer } from 'src/app/_models/customer';
import { Component, OnInit } from '@angular/core';
import { GrandService } from 'src/app/_models/grandService';
import { UIHelper } from 'src/app/_helpers/ui.helper';
import { ActivatedRoute, Router } from '@angular/router';
import { GrandServicesService } from 'src/app/_services/grandServices.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/_services/products.service';
import { Product } from 'src/app/_models/product';
import { CustomerPaymentsService } from 'src/app/_services/customerPayments.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { CustomerDiscountsService } from 'src/app/_services/customerDiscounts.service';
import { CustomerDiscount } from 'src/app/_models/customerDiscounts';
import { debounceTime, switchMap, finalize, tap } from 'rxjs/operators';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-grand-service-customer-details',
  templateUrl: './grand-service-customer-details.component.html',
  styleUrls: ['./grand-service-customer-details.component.less']
})
export class GrandServiceCustomerDetailsComponent implements OnInit {

  formErrors: string[];
  grandService: GrandService;
  customerGrandService: any;
  accomodations: Product[];
  transportation: Product[];
  airlines: Product[];
  entertainment: Product[];
  optionalExcusrsions: Product[];
  customerPayments: CustomerPayment[];
  customerCoupons: CustomerDiscount[];
  public minPaymentDate = new Date();
  invoiceLink: string;
  receiptLink: string;

  filteredUsers: Customer[] = [];
  usersForm: FormGroup;
  isLoading = false;
  selectedApplicantId: number;

  constructor(private uiHelper: UIHelper, private route: ActivatedRoute, private grandServicesService: GrandServicesService,
              private fb: FormBuilder, private router: Router, private productsService: ProductsService,
              private customerPaymentsService: CustomerPaymentsService, private toastr: ToastrService,
              private customerDiscountsService: CustomerDiscountsService, private customerService: CustomerService) { }

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

    const date = new Date();
    date.setDate(date.getDate() - 5);
    this.minPaymentDate = date;

    this.route.params.subscribe(params => {
      this.grandServicesService.get(params.name)
        .subscribe((data) => {
          this.grandService = data;

          this.grandServicesService.getCustomer(this.grandService.id, params.customerId)
            .subscribe((cust) => {
              this.customerGrandService = cust;
              this.selectedApplicantId = this.customerGrandService.customerId;

              this.invoiceLink =
                environment.baseAPIUrl + '/grandservices/' + this.grandService.id + '/users/' + this.customerGrandService.customerId;
              this.receiptLink = environment.baseAPIUrl + '/customerpayments';

              this.customerPayments = this.customerGrandService.payments;

              this.customerDiscountsService.getByCustomerGrandService(this.customerGrandService.id).subscribe((cp) => {
                this.customerCoupons = cp;
                });

              this.productsService.getList(this.grandService.id, ProductType.Accommodation)
              .subscribe((acc) => {
                  this.accomodations = acc;

                  this.setServices();
              });
              this.productsService.getList(this.grandService.id, ProductType.Transportation)
              .subscribe((acc) => {
                  this.transportation = acc;
              });
              this.productsService.getList(this.grandService.id, ProductType.Airlines)
              .subscribe((acc) => {
                  this.airlines = acc;
              });
              this.productsService.getList(this.grandService.id, ProductType.Entertainment)
              .subscribe((acc) => {
                  this.entertainment = acc;
              });
              this.productsService.getList(this.grandService.id, ProductType.Tour_Guides)
              .subscribe((acc) => {
                  this.optionalExcusrsions = acc;
              });
          });
      });
   });
  }

  private setServices() {
    setTimeout(() => {
      this.customerGrandService.services.forEach(service => {
        if (service.customerId === this.selectedApplicantId) {
          const serviceId = service.serviceId;
          const elem = document.getElementById(serviceId) as HTMLElement;
          if (elem !== null) {
            elem.setAttribute('checked', 'checked');
          }
        }
      });
    }, 1000);
    // match services with customer services
  }

  addCustomer() {
    const servicesElements: NodeListOf<HTMLInputElement> = document.querySelectorAll('.service input:checked');
    const serviceIds: { serviceId: number }[] = [];

    servicesElements.forEach((srv) => {
      serviceIds.push(
        {
          serviceId: Number(srv.id)
        }
      );
    });

    let isMainApplicant = false;

    if (this.selectedApplicantId === this.customerGrandService.customerId) {
      isMainApplicant = true;
    }

    const jointCustomerIds: number[] = [];

    if (isMainApplicant) {
      this.customerGrandService.jointCustomers.forEach(j => {
        jointCustomerIds.push(j.id);
      });
    }

    const cookieValue = JSON.parse(localStorage.getItem(environment.cookieName));
    const salesPersonName = cookieValue.name;

    const customerServicesToPush = {
      isMain: isMainApplicant,
      customerId: this.selectedApplicantId,
      customerGrandServiceId: this.customerGrandService.id,
      serviceIds,
      jointCustomerIds,
      salesPersonName
     };

    this.grandServicesService.purchase(
      this.grandService.id,
      this.customerGrandService.customerId,
      customerServicesToPush).
    subscribe((data) => {
      document.location.reload();
    });
  }

  addPayment() {
    const paymentDate = (document.getElementById('paymentDate') as HTMLInputElement);
    const paymentAmount = (document.getElementById('paymentAmount') as HTMLInputElement);
    const paymentMethod = (document.getElementById('paymentMethod') as HTMLInputElement);
    const paymentAdditionalInfo = (document.getElementById('paymentAdditionalInfo') as HTMLInputElement);

    const customerPayment = new CustomerPayment();
    customerPayment.additionalInfo = paymentAdditionalInfo.value;

    customerPayment.amount = Number(paymentAmount.value);

    customerPayment.paymentDate = new Date(paymentDate.value).toISOString();
    customerPayment.paymentMethod = paymentMethod.value;
    customerPayment.customerId = this.customerGrandService.customerId;
    customerPayment.grandServiceId = this.grandService.id;
    customerPayment.customerGrandServiceId = this.customerGrandService.id;

    this.customerPaymentsService.save(customerPayment).subscribe((obj) => {
      this.customerPayments.push(customerPayment);
      this.uiHelper.successSave(this.toastr, 'Payment Added', 'Successfully added payment for the amount of $' + paymentAmount);
      paymentDate.value = '';
      paymentAmount.value = '';
      paymentMethod.value = '';
      paymentAdditionalInfo.value = '';
    });
  }

  addCoupon() {
    const paymentDate = (document.getElementById('paymentDateCoupon') as HTMLInputElement);
    const paymentAmount = (document.getElementById('paymentAmountCoupon') as HTMLInputElement);
    const paymentAdditionalInfo = (document.getElementById('paymentAdditionalInfoCoupon') as HTMLInputElement);

    const customerDiscount = new CustomerDiscount();
    customerDiscount.additionalInfo = paymentAdditionalInfo.value;

    customerDiscount.amount = Number(paymentAmount.value);
    customerDiscount.customerId = this.customerGrandService.customerId;
    customerDiscount.grandServiceId = this.grandService.id;
    customerDiscount.customerGrandServiceId = this.customerGrandService.id;

    this.customerDiscountsService.save(customerDiscount).subscribe((obj) => {
      this.customerCoupons.push(customerDiscount);
      this.uiHelper.successSave(this.toastr, 'Coupon Added', 'Successfully added Coupon for the amount of $' + paymentAmount);
      paymentDate.value = '';
      paymentAmount.value = '';
      paymentAdditionalInfo.value = '';
    });
  }

  removePayment(paymentId: number) {
    alert('You can not remove payments at this time.  Please contact the Administrator.');
  }
  removeDiscount(paymentId: number) {
    alert('You can not remove discounts at this time.  Please contact the Administrator.');
  }

  addJoint(userId: number, firstName: string, lastName: string, phone: string) {
    if (this.customerGrandService.id === null) {
      alert('Please first save primary traveller before adding joint ones');
      return;
    }

    this.customerGrandService.jointCustomers.push({
      firstName,
      lastName,
      phone,
      id: userId
    });
  }
  removeJoint(userId: number) {
    alert('remove ' + userId);
  }
  selectApplicant(userId: number) {
    document.getElementsByClassName('selected').item(0).classList.remove('selected');
    (event.currentTarget as HTMLElement).classList.add('selected');

    this.selectedApplicantId = userId;

    // remove current checkboxes
    var inputs = document.querySelectorAll("input[type='checkbox']");
    for(var i = 0; i < inputs.length; i++) {
      inputs[i].removeAttribute('checked');
    }

    this.setServices();
  }
}
