import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedescriptionComponent } from './servicedescription.component';

describe('ServicedescriptionComponent', () => {
  let component: ServicedescriptionComponent;
  let fixture: ComponentFixture<ServicedescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicedescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicedescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
