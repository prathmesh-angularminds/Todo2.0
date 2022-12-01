import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpTaskComponent } from './imp-task.component';

describe('ImpTaskComponent', () => {
  let component: ImpTaskComponent;
  let fixture: ComponentFixture<ImpTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
