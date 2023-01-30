import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaGetComponent } from './vista-get.component';

describe('VistaGetComponent', () => {
  let component: VistaGetComponent;
  let fixture: ComponentFixture<VistaGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
