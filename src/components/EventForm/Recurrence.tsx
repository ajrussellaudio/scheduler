import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { RRule } from 'rrule';
import { days } from './constants/days';
import { toRRuleDayConstants } from './utils/toRRuleDayConstants';

export type RecurrenceProps = Record<string, never>;

export const Recurrence = () => {
  const { register, setValue } = useFormContext();
  const [selectedDays, setSelectedDays] = useState(
    Object.fromEntries(days.map((day) => [day, false]))
  );

  useEffect(() => {
    setValue(
      'rrule',
      new RRule({
        freq: RRule.WEEKLY,
        byweekday: toRRuleDayConstants(selectedDays),
      }).toString()
    );
  }, [selectedDays]);

  const toggleDay = (day: string) => {
    setSelectedDays((prevSelectedDays) => ({ ...prevSelectedDays, [day]: !prevSelectedDays[day] }));
  };

  return (
    <>
      {days.map((day) => (
        <label key={day}>
          {day}
          <input type="checkbox" checked={selectedDays[day]} onChange={() => toggleDay(day)} />
        </label>
      ))}
      <input type="hidden" {...register('rrule')} />
    </>
  );
};
