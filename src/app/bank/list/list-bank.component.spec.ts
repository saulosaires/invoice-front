import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListBankComponent} from './list-bank.component';

describe('ListBankComponent', () => {
  let component: ListBankComponent;
  let fixture: ComponentFixture<ListBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBankComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
