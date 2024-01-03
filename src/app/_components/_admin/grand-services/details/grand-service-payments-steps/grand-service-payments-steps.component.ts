import { GrandService } from './../../../../../_models/grandService';
import { Component, OnInit } from '@angular/core';
import { UIHelper } from 'src/app/_helpers/ui.helper';
import { ActivatedRoute } from '@angular/router';
import { GrandServicesService } from 'src/app/_services/grandServices.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PaymentStep } from 'src/app/_models/paymentStep';
import { PaymentStepService } from 'src/app/_services/paymentStep.service';

@Component({
  selector: 'app-grand-service-payments-steps',
  templateUrl: './grand-service-payments-steps.component.html',
  styleUrls: ['./grand-service-payments-steps.component.less']
})
export class GrandServicePaymentsStepsComponent implements OnInit {
  formErrors: string[];
  grandService: GrandService;
  form: FormGroup;
  paymentSteps: PaymentStep[];

  constructor(private uiHelper: UIHelper, private route: ActivatedRoute, private paymentStepService: PaymentStepService,
              private grandServicesService: GrandServicesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formErrors = [];
    this.paymentSteps = new Array<PaymentStep>();

    this.route.params.subscribe(params => {
      this.grandServicesService.get(params.name)
        .subscribe((data) => {
          this.paymentStepService.getList(data.id)
            .subscribe((data2) => {
              this.paymentSteps = data2;
              this.createFormGroup();
              this.grandService = data;


              const pageContext = this;
              setTimeout(() => { // has to allow page to load
                pageContext.setPaymentType(pageContext);
              }, 1);
          });
      });
   });
  }

  setPaymentType(pageContext) {
    pageContext.paymentSteps.forEach((paymentStep, i) => {
      if (paymentStep.type == 'Deposit') {
        document.getElementById('deposit-' + i).click();
      } else if (paymentStep.type == 'Final Payment') {
        document.getElementById('final-' + i).click()
      } else {
        document.getElementById('other-' + i).click()
      }
    });
  }

  save() {
    let newPaymentSteps: PaymentStep[] = this.form.value.paymentSteps as PaymentStep[];

    newPaymentSteps = newPaymentSteps.filter(s => s.type !== '');

    newPaymentSteps.forEach((step) => {
      if (step.due === '') {
        step.due = null;
      }
    });

    this.paymentStepService.save(newPaymentSteps, this.grandService.id)
      .subscribe((res) => {
        location.reload();
    }, error => {
      this.addErrors(error.error);
    });
  }

  addErrors(errors: { [s: string]: {}; } | ArrayLike<{}>): void {
    this.formErrors = [];
    Object.entries(errors).forEach(
      ([key, value]) => this.formErrors.push(key + ': ' + value));

    this.uiHelper.scrollToTop();
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      paymentSteps: this.formBuilder.array([])
    });

    const control = this.form.controls.paymentSteps as FormArray;
    this.paymentSteps.forEach((paymentStep, i) => {
      control.push(this.formBuilder.group({
        id: paymentStep.id,
        grandServiceId: paymentStep.grandServiceId,
        amount: paymentStep.amount,
        due: paymentStep.due,
        created: paymentStep.created,
        updated: paymentStep.updated,
        type: paymentStep.type
      }));
    });
  }

  add() {
    const newStep = new PaymentStep();
    newStep.grandServiceId = this.grandService.id;

    this.paymentSteps.push(newStep);

    const control = this.form.controls.paymentSteps as FormArray;
    control.push(this.formBuilder.group(newStep));
  }

  checkDepositPayment($event) {
    this.setControlType($event, 'Deposit', true);
  }

  checkFinalPayment($event) {
    this.setControlType($event, 'Final Payment', true);
  }

  checkOtherPayment($event) {
    this.setControlType($event, 'Other', false);
  }

  private setControlType($event: any, typeName: string, disable: boolean) {
    const stepLocation: number = parseInt(
      $event.target.getAttribute('name').replace('paymentType-', ''), 10);
    const control = this.form.controls.paymentSteps as FormArray;

    const currentValue = control.controls[stepLocation].get('type').value;

    if (!
      (typeName === 'Other' &&
      currentValue !== 'Final Payment' &&
      currentValue !== 'Deposit')) {
        control.controls[stepLocation].get('type').setValue(typeName);
        $event.toElement.parentElement.parentElement.parentElement.children[1].children[1].value = typeName;
    }

    $event.toElement.parentElement.parentElement.parentElement.parentElement.children[3].children[1].removeAttribute('disabled');
    $event.toElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].removeAttribute('disabled');

    if (typeName === 'Deposit') {
      control.controls[stepLocation].get('due').setValue('');
      $event.toElement.parentElement.parentElement.parentElement.parentElement.children[3].children[1].setAttribute('disabled', 'disabled');
    } else if (typeName === 'Final Payment') {
      control.controls[stepLocation].get('amount').setValue(0);
      $event.toElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].setAttribute('disabled', 'disabled');
    }

    if (disable) {
      document.getElementById('paymentType-' + stepLocation.toString()).setAttribute('disabled', 'disabled');
    } else {
      document.getElementById('paymentType-' + stepLocation.toString()).removeAttribute('disabled');
    }

    control.markAsDirty();
  }
}
