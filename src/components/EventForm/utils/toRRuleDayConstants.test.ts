import { RRule } from 'rrule';
import { toRRuleDayConstants } from './toRRuleDayConstants';

describe('toRRuleDayConstants', () => {
  it('converts a selected day to its RRule lib constant', () => {
    expect(toRRuleDayConstants({ Monday: true, Tuesday: false })).toEqual([RRule.MO]);
  });

  it('works with more than one selected day', () => {
    expect(
      toRRuleDayConstants({ Monday: true, Tuesday: false, Thursday: false, Friday: true })
    ).toEqual([RRule.MO, RRule.FR]);
  });

  it('works with all days', () => {
    expect(
      toRRuleDayConstants({
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true,
      })
    ).toEqual([RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR, RRule.SA, RRule.SU]);
  });
});
