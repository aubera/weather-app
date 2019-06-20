import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapWeatherInputComponent } from './wrap-weather-input.component';

describe('WrapWeatherInputComponent', () => {
  let component: WrapWeatherInputComponent;
  let fixture: ComponentFixture<WrapWeatherInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapWeatherInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapWeatherInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
