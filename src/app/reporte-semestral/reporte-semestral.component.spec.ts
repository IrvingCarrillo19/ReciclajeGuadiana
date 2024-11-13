import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteSemestralComponent } from './reporte-semestral.component';

describe('ReporteSemestralComponent', () => {
  let component: ReporteSemestralComponent;
  let fixture: ComponentFixture<ReporteSemestralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteSemestralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteSemestralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
