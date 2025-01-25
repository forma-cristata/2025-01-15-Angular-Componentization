import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsViewComponent } from './trainings-view.component';

describe('TrainingsViewComponent', () => {
  let component: TrainingsViewComponent;
  let fixture: ComponentFixture<TrainingsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
