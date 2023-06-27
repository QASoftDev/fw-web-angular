import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaUpdateComponent } from './tema-update.component';

describe('TemaUpdateComponent', () => {
  let component: TemaUpdateComponent;
  let fixture: ComponentFixture<TemaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
