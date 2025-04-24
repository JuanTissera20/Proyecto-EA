import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadInfoComponent } from './unidad-info.component';

describe('UnidadInfoComponent', () => {
  let component: UnidadInfoComponent;
  let fixture: ComponentFixture<UnidadInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
