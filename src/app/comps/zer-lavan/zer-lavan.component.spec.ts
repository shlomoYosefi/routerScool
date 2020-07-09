import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZerLavanComponent } from './zer-lavan.component';

describe('ZerLavanComponent', () => {
  let component: ZerLavanComponent;
  let fixture: ComponentFixture<ZerLavanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZerLavanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerLavanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
