import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceExtraComponent } from './invoice-extra.component';

describe('InvoiceExtraComponent', () => {
  let component: InvoiceExtraComponent;
  let fixture: ComponentFixture<InvoiceExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceExtraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
