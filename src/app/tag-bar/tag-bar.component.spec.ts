import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagBarComponent } from './tag-bar.component';

describe('TagBarComponent', () => {
  let component: TagBarComponent;
  let fixture: ComponentFixture<TagBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagBarComponent]
    });
    fixture = TestBed.createComponent(TagBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
