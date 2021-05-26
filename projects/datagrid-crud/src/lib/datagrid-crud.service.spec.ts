import { TestBed } from '@angular/core/testing';

import { DatagridCrudService } from './datagrid-crud.service';

describe('DatagridCrudService', () => {
  let service: DatagridCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatagridCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
