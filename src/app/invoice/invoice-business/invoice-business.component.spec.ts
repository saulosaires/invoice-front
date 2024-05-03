import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InvoiceBusinessComponent} from './invoice-business.component';

describe('InvoiceBusinessComponent', () => {
  let component: InvoiceBusinessComponent;
  let fixture: ComponentFixture<InvoiceBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceBusinessComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InvoiceBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
