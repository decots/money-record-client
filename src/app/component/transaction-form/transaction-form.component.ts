import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/model/transaction/transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/service/transaction-service/transaction.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  transactionForm: FormGroup;
  transaction: Transaction;
  types: string[] = ['Spending', 'Earning'];
  defaultType: string = 'Spending';
  submitted = false;

  constructor(
    private router: Router,
    private transactionService: TransactionService,
    private formBuilder: FormBuilder
  ) {
    this.transaction = new Transaction();
    this.transaction.type = this.defaultType;
  }

  ngOnInit() {
    this.transactionForm = this.formBuilder.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^\d*\.?\d+$/)]],
      description: ['', Validators.required]
    });
    this.transactionForm.controls['type'].setValue(this.defaultType, {
      onlySelf: true
    });
  }

  get f() {
    return this.transactionForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.transactionForm.invalid) {
      return;
    }
    this.transactionService
      .save(this.transaction)
      .subscribe(result => this.gotoTransactionList());
  }

  gotoTransactionList() {
    this.router.navigate(['']);
  }
}
