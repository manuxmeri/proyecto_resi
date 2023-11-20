import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreOficinaComponent } from './agre-oficina.component';

describe('AgreOficinaComponent', () => {
  let component: AgreOficinaComponent;
  let fixture: ComponentFixture<AgreOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreOficinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
