import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCrudComponent } from './playlist-crud.component';

describe('PlaylistCrudComponent', () => {
  let component: PlaylistCrudComponent;
  let fixture: ComponentFixture<PlaylistCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
