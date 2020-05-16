import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistControlComponent } from './artist-control.component';

describe('ArtistControlComponent', () => {
  let component: ArtistControlComponent;
  let fixture: ComponentFixture<ArtistControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
