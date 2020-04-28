import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PglGutenbergComponent } from './pgl-gutenberg.component';

describe('PglGutenbergComponent', () => {
  let component: PglGutenbergComponent;
  let fixture: ComponentFixture<PglGutenbergComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PglGutenbergComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PglGutenbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
