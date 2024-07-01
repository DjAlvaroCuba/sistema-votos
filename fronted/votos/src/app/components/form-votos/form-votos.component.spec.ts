import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVotosComponent } from './form-votos.component';

describe('FormVotosComponent', () => {
  let component: FormVotosComponent;
  let fixture: ComponentFixture<FormVotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVotosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
