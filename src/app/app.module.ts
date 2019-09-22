import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './component/transaction-form/transaction-form.component';
import { TransactionService } from './service/transaction-service/transaction.service';
import { TransactionEditFormComponent } from './component/transaction-edit-form/transaction-edit-form.component';
import { DataService } from './service/data-service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransactionFormComponent,
    TransactionEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TransactionService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
