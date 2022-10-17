import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EventForm, EventFormProps } from './EventForm';

const defaultProps: EventFormProps = {
  onSubmit: () => null
};

const renderComponent = (props: Partial<EventFormProps> = {}) =>
  render(<EventForm {...defaultProps} {...props} />);

describe('EventForm', () => {
  it('submits an event with start time, end time and subject', async () => {
    const onSubmit = jest.fn();
    renderComponent({ onSubmit });
    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/subject/i), 'My first appointment');
    const startTimeInput = screen.getByLabelText(/start time/i);
    await user.clear(startTimeInput);
    await user.type(startTimeInput, '2018-06-12T19:30');
    const endTimeInput = screen.getByLabelText(/end time/i);
    await user.clear(endTimeInput);
    await user.type(endTimeInput, '2018-06-12T20:30');
    await user.click(screen.getByRole('button', { name: /add event/i }));
    expect(onSubmit).toBeCalledWith({
      title: 'My first appointment',
      start: '2018-06-12T19:30',
      end: '2018-06-12T20:30'
    });
  });
});
