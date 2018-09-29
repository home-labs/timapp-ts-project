import { TestBed, inject } from '@angular/core/testing';

import { NgTimappService } from './ng-timapp.service';

describe('NgTimappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgTimappService]
    });
  });

  it('should be created', inject([NgTimappService], (service: NgTimappService) => {
    expect(service).toBeTruthy();
  }));
});
