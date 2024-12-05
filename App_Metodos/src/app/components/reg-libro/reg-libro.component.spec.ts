import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegLibroComponent } from './reg-libro.component';

describe('RegLibroComponent', () => {
  let component: RegLibroComponent;
  let fixture: ComponentFixture<RegLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
