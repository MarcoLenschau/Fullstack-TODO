import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTaskDialog } from './detail-task-dialog';

describe('DetailTaskDialog', () => {
  let component: DetailTaskDialog;
  let fixture: ComponentFixture<DetailTaskDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailTaskDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTaskDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
