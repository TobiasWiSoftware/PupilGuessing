import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilGameComponent } from './pupil-game.component';

describe('PupilGameComponent', () => {
  let component: PupilGameComponent;
  let fixture: ComponentFixture<PupilGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PupilGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PupilGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
