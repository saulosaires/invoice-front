import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersistInvoiceComponent} from './persist-invoice.component';

describe('PersistInvoiceComponent', () => {
  let component: PersistInvoiceComponent;
  let fixture: ComponentFixture<PersistInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersistInvoiceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersistInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
