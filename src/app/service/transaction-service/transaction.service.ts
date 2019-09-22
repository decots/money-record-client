import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../../model/transaction/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactionUrl: string;

  constructor(private http: HttpClient) {
    this.transactionUrl = 'http://localhost:8080/api/transaction';
  }

  public findAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl + '/getAll');
  }

  public save(transaction: Transaction) {
    return this.http.post<Transaction>(
      this.transactionUrl + '/save',
      transaction
    );
  }

  public delete(transaction: Transaction) {
    return this.http.post<Transaction>(
      this.transactionUrl + '/delete',
      transaction.id
    );
  }
}
