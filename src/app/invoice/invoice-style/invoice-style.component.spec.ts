import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceStyleComponent } from './invoice-style.component';

describe('InvoiceStyleComponent', () => {
  let component: InvoiceStyleComponent;
  let fixture: ComponentFixture<InvoiceStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
