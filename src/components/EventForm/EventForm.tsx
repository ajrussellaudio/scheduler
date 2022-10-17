import { useState } from 'react';
import { Event } from 'react-big-calendar';
import { FormProvider, useForm } from 'react-hook-form';
import { Recurrence } from './Recurrence';

export type EventFormProps = {
  onSubmit: (newEvent: Event) => void;
};

type FormValues = {
  title: string;
  start: Date;
  end: Date;
  rrule: string;
};

export const EventForm = ({ onSubmit }: EventFormProps) => {
  const methods = useForm<FormValues>();
  const { register, handleSubmit } = methods;
  const [isRecurring, setIsRecurring] = useState(false);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((newEvent) => {
          onSubmit(newEvent);
        })}
      >
        <label>
          Subject
          <input {...register('title', { required: true })} />
        </label>
        <label>
          Start time
          <input type="datetime-local" {...register('start', { required: true })} />
        </label>
        <label>
          End time
          <input type="datetime-local" {...register('end', { required: true })} />
        </label>
        <label>
          Recurring
          <input
            type="checkbox"
            checked={isRecurring}
            onChange={(event) => setIsRecurring(event.currentTarget.checked)}
          />
        </label>
        {isRecurring && <Recurrence />}
        <button type="submit">Add event</button>
      </form>
    </FormProvider>
  );
};
