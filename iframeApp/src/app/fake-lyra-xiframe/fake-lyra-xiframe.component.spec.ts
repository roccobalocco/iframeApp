import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLyraXIFrameComponent } from './fake-lyra-xiframe.component';

describe('FakeLyraXIFrameComponent', () => {
  let component: FakeLyraXIFrameComponent;
  let fixture: ComponentFixture<FakeLyraXIFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeLyraXIFrameComponent]
    });
    fixture = TestBed.createComponent(FakeLyraXIFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
