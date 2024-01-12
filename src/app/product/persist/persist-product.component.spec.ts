import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistProductComponent } from './persist-product.component';

describe('PersistProductComponent', () => {
  let component: PersistProductComponent;
  let fixture: ComponentFixture<PersistProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersistProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersistProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
