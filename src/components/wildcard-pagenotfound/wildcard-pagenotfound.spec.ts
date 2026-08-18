import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardPagenotfound } from './wildcard-pagenotfound';

describe('WildcardPagenotfound', () => {
  let component: WildcardPagenotfound;
  let fixture: ComponentFixture<WildcardPagenotfound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildcardPagenotfound],
    }).compileComponents();

    fixture = TestBed.createComponent(WildcardPagenotfound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
