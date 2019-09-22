import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './component/transaction-form/transaction-form.component';
import { TransactionEditFormComponent } from './component/transaction-edit-form/transaction-edit-form.component';

const routes: Routes = [
  { path: '', component: TransactionListComponent },
  { path: 'save', component: TransactionFormComponent },
  { path: 'edit', component: TransactionEditFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
