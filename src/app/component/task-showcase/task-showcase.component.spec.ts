import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskShowcaseComponent } from './task-showcase.component';

describe('TaskShowcaseComponent', () => {
  let component: TaskShowcaseComponent;
  let fixture: ComponentFixture<TaskShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskShowcaseComponent]
    });
    fixture = TestBed.createComponent(TaskShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
