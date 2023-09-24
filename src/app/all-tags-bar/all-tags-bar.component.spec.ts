import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTagsBarComponent } from './all-tags-bar.component';

describe('AllTagsBarComponent', () => {
  let component: AllTagsBarComponent;
  let fixture: ComponentFixture<AllTagsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTagsBarComponent]
    });
    fixture = TestBed.createComponent(AllTagsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
