import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustumisadasComponent } from './diretivas-custumisadas.component';

describe('DiretivasCustumisadasComponent', () => {
  let component: DiretivasCustumisadasComponent;
  let fixture: ComponentFixture<DiretivasCustumisadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasCustumisadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCustumisadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
