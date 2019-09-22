import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/model/transaction/transaction';
import { TransactionService } from 'src/app/service/transaction-service/transaction.service';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from 'src/app/service/data-service/data.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[];
  noData: boolean = true;
  totalEarn: number = 0;
  totalSpend: number = 0;
  constructor(
    private transactionService: TransactionService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.transactionService.findAll().subscribe(data => {
      data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      this.transactions = data;
      if (this.transactions == null || this.transactions.length > 0) {
        this.noData = false;

        for (let transaction of this.transactions) {
          if (transaction.type == 'Earning') {
            this.totalEarn += transaction.amount;
          } else if (transaction.type == 'Spending') {
            this.totalSpend += transaction.amount;
          }
        }
      }
    });
  }

  rowSelected(transaction: Transaction) {
    this.dataService.storage = {
      transaction: JSON.stringify(transaction)
    };
    this.router.navigate(['/edit']);
  }
}
