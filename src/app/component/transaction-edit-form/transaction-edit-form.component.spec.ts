import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEditFormComponent } from './transaction-edit-form.component';

describe('TransactionEditFormComponent', () => {
  let component: TransactionEditFormComponent;
  let fixture: ComponentFixture<TransactionEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
