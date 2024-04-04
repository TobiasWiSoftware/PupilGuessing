import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilAddingComponent } from './pupil-adding.component';

describe('PupilAddingComponent', () => {
  let component: PupilAddingComponent;
  let fixture: ComponentFixture<PupilAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PupilAddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PupilAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
