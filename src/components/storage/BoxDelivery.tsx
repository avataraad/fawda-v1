
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { isSameMonth, startOfToday, isBefore, addDays } from "date-fns";

interface BoxDeliveryProps {
  deliveryOption: 'tomorrow' | 'schedule';
  deliveryDate: Date | undefined;
  selectedDeliveryTimeSlot: string | null;
  onDeliveryOptionChange: (option: 'tomorrow' | 'schedule') => void;
  onDeliveryDateChange: (date: Date | undefined) => void;
  onDeliveryTimeSlotChange: (slot: string | null) => void;
}

export const BoxDelivery = ({
  deliveryOption,
  deliveryDate,
  selectedDeliveryTimeSlot,
  onDeliveryOptionChange,
  onDeliveryDateChange,
  onDeliveryTimeSlotChange,
}: BoxDeliveryProps) => {
  const isDateDisabled = (date: Date) => {
    const today = startOfToday();
    return isBefore(date, today) || !isSameMonth(date, today);
  };

  return (
    <section className="mb-8">
      <h3 className="text-lg mb-4">Box delivery</h3>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button 
          className={`bg-gray-800 py-3 px-4 rounded-lg text-left transition-colors ${
            deliveryOption === 'tomorrow' ? 'bg-opacity-100' : 'bg-opacity-40'
          }`}
          onClick={() => {
            onDeliveryOptionChange('tomorrow');
            onDeliveryDateChange(addDays(new Date(), 1));
            onDeliveryTimeSlotChange(null);
          }}
        >
          <div>Tomorrow</div>
          <div className="text-sm text-gray-400">3-hr window</div>
        </button>
        <button 
          className={`bg-gray-800 py-3 px-4 rounded-lg text-left transition-colors ${
            deliveryOption === 'schedule' ? 'bg-opacity-100' : 'bg-opacity-40'
          }`}
          onClick={() => {
            onDeliveryOptionChange('schedule');
            onDeliveryDateChange(undefined);
            onDeliveryTimeSlotChange(null);
          }}
        >
          <div>Schedule</div>
          <div className="text-sm text-gray-400">Extra AED 9</div>
        </button>
      </div>
      
      {deliveryOption === 'schedule' && (
        <>
          <div className={`bg-gray-800 rounded-lg p-4 transition-colors mb-4 ${
            deliveryDate ? 'bg-opacity-100' : 'bg-opacity-40'
          }`}>
            <CalendarComponent 
              className="rounded-lg"
              mode="single"
              selected={deliveryDate}
              onSelect={onDeliveryDateChange}
              disabled={isDateDisabled}
              fromDate={new Date()}
              initialFocus
            />
          </div>
          {deliveryDate && (
            <div className="grid grid-cols-4 gap-2">
              {["09:00 - 12:00", "12:00 - 15:00", "15:00 - 18:00", "18:00 - 21:00"].map(time => (
                <button 
                  key={time} 
                  className={`bg-gray-800 p-2 rounded-lg text-center text-sm transition-colors ${
                    selectedDeliveryTimeSlot === time ? 'bg-opacity-100' : 'bg-opacity-40'
                  }`}
                  onClick={() => onDeliveryTimeSlotChange(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};
