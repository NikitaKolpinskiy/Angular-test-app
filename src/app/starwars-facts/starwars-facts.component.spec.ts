import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactsComponent } from './starwars-facts.component';

describe('CatFactsComponent', () => {
  let component: CatFactsComponent;
  let fixture: ComponentFixture<CatFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
