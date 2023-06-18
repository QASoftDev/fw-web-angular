import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaReadComponent } from './tema-read.component';

describe('TemaReadComponent', () => {
  let component: TemaReadComponent;
  let fixture: ComponentFixture<TemaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
