import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLibroComponent } from './search-libro.component';

describe('SearchLibroComponent', () => {
  let component: SearchLibroComponent;
  let fixture: ComponentFixture<SearchLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
