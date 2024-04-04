import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAddingComponent } from './player-adding.component';

describe('PlayerAddingComponent', () => {
  let component: PlayerAddingComponent;
  let fixture: ComponentFixture<PlayerAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerAddingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
