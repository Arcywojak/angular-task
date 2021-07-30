import { TimeFromMinutesPipe } from './time-from-minutes.pipe';

describe('TimeFromMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeFromMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
