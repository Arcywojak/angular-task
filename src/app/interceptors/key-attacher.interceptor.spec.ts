import { TestBed } from '@angular/core/testing';

import { KeyAttacherInterceptor } from './key-attacher.interceptor';

describe('KeyAttacherInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      KeyAttacherInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: KeyAttacherInterceptor = TestBed.inject(KeyAttacherInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
