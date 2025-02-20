
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { isSameMonth, startOfToday, isBefore } from "date-fns";

interface PickupScheduleProps {
  selectedDate: Date | undefined;
  pickupTimeOption: 'flexible' | 'schedule';
  selectedTimeSlot: string | null;
  onDateChange: (date: Date | undefined) => void;
  onTimeOptionChange: (option: 'flexible' | 'schedule') => void;
  onTimeSlotChange: (slot: string | null) => void;
}

export const PickupSchedule = ({
  selectedDate,
  pickupTimeOption,
  selectedTimeSlot,
  onDateChange,
  onTimeOptionChange,
  onTimeSlotChange,
}: PickupScheduleProps) => {
  const isDateDisabled = (date: Date) => {
    const today = startOfToday();
    return isBefore(date, today) || !isSameMonth(date, today);
  };

  return (
    <>
      <section className="mb-8">
        <h3 className="text-lg mb-4">Pick up date</h3>
        <div className={`bg-gray-800 rounded-lg p-4 transition-colors ${
          selectedDate ? 'bg-opacity-100' : 'bg-opacity-40'
        }`}>
          <CalendarComponent 
            className="rounded-lg" 
            mode="single"
            selected={selectedDate}
            onSelect={onDateChange}
            disabled={isDateDisabled}
            fromDate={new Date()}
            initialFocus
          />
        </div>
      </section>

      {selectedDate && (
        <section className="mb-8">
          <h3 className="text-lg mb-4">Pick up time</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button 
              className={`bg-gray-800 py-3 px-4 rounded-lg text-left transition-colors ${
                pickupTimeOption === 'flexible' ? 'bg-opacity-100' : 'bg-opacity-40'
              }`}
              onClick={() => onTimeOptionChange('flexible')}
            >
              <div>Flexible</div>
              <div className="text-sm text-gray-400">3-hr window</div>
            </button>
            <button 
              className={`bg-gray-800 py-3 px-4 rounded-lg text-left transition-colors ${
                pickupTimeOption === 'schedule' ? 'bg-opacity-100' : 'bg-opacity-40'
              }`}
              onClick={() => onTimeOptionChange('schedule')}
            >
              <div>Schedule</div>
              <div className="text-sm text-gray-400">Extra AED 9</div>
            </button>
          </div>
          
          {pickupTimeOption === 'schedule' && (
            <div className="grid grid-cols-4 gap-2">
              {["09:00 - 12:00", "12:00 - 15:00", "15:00 - 18:00", "18:00 - 21:00"].map(time => (
                <button 
                  key={time} 
                  className={`bg-gray-800 p-2 rounded-lg text-center text-sm transition-colors ${
                    selectedTimeSlot === time ? 'bg-opacity-100' : 'bg-opacity-40'
                  }`}
                  onClick={() => onTimeSlotChange(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};
