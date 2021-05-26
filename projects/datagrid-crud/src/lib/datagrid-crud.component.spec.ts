import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridCrudComponent } from './datagrid-crud.component';

describe('DatagridCrudComponent', () => {
  let component: DatagridCrudComponent;
  let fixture: ComponentFixture<DatagridCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagridCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
