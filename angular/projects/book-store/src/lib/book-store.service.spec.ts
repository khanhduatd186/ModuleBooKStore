import { TestBed } from '@angular/core/testing';
import { BookStoreService } from './services/book-store.service';
import { RestService } from '@abp/ng.core';

describe('BookStoreService', () => {
  let service: BookStoreService;
  const mockRestService = jasmine.createSpyObj('RestService', ['request']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RestService,
          useValue: mockRestService,
        },
      ],
    });
    service = TestBed.inject(BookStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
