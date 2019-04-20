import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertifyEmailComponent } from './vertify-email.component';

describe('VertifyEmailComponent', () => {
  let component: VertifyEmailComponent;
  let fixture: ComponentFixture<VertifyEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertifyEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
