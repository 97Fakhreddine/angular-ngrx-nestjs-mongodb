import { TestBed } from '@angular/core/testing';

import { ItemlListService } from './iteml-list.service';

describe('ItemlListService', () => {
  let service: ItemlListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemlListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
