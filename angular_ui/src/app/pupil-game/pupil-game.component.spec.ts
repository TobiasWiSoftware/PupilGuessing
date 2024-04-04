import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilImageComponent } from './pupil-game.component';

describe('PupilGameComponent', () => {
  let component: PupilImageComponent;
  let fixture: ComponentFixture<PupilImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PupilImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PupilImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
