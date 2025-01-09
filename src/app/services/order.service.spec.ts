import { TestBed } from '@angular/core/testing';

// @ts-ignore
import { OrderServiceService } from './order.service';

describe('OrderServiceService', () => {
  let service: OrderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
