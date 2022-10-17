import { Event } from 'react-big-calendar';
import { useForm } from 'react-hook-form';

export type EventFormProps = {
  onSubmit: (newEvent: Event) => void;
};

type FormValues = {
  title: string;
  start: Date;
  end: Date;
};

export const EventForm = ({ onSubmit }: EventFormProps) => {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit((newEvent) => onSubmit(newEvent))}>
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
      <button type="submit">Add event</button>
    </form>
  );
};
