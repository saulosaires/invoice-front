import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistContactComponent } from './persist-contact.component';

describe('PersistContactComponent', () => {
  let component: PersistContactComponent;
  let fixture: ComponentFixture<PersistContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersistContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersistContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
