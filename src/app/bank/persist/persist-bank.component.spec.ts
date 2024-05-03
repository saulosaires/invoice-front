import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersistBankComponent} from './persist-bank.component';

describe('PersistBankComponent', () => {
  let component: PersistBankComponent;
  let fixture: ComponentFixture<PersistBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersistBankComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersistBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
