import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Transaction } from 'src/app/model/transaction/transaction';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/service/transaction-service/transaction.service';
import { DataService } from 'src/app/service/data-service/data.service';

@Component({
  selector: 'app-transaction-edit-form',
  templateUrl: './transaction-edit-form.component.html',
  styleUrls: ['./transaction-edit-form.component.scss']
})
export class TransactionEditFormComponent implements OnInit {
  transactionForm: FormGroup;
  transaction: Transaction = null;
  submitted = false;
  types: string[] = ['Spending', 'Earning'];

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.transactionForm = this.formBuilder.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^\d*\.?\d+$/)]],
      description: ['', Validators.required]
    });

    this.transaction = JSON.parse(this.dataService.storage['transaction']);
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

  deleteTransaction() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.transactionService
        .delete(this.transaction)
        .subscribe(result => this.gotoTransactionList());
    }
  }
}
