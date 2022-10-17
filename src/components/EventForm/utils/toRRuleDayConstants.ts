import { ByWeekday, RRule } from 'rrule';

export function toRRuleDayConstants(days: Record<string, boolean>) {
  const rRuleDays: Record<string, ByWeekday> = {
    Sunday: RRule.SU,
    Monday: RRule.MO,
    Tuesday: RRule.TU,
    Wednesday: RRule.WE,
    Thursday: RRule.TH,
    Friday: RRule.FR,
    Saturday: RRule.SA,
  };

  return Object.entries(days)
    .filter(([_day, isSelected]) => isSelected)
    .map(([day]) => rRuleDays[day]);
}
