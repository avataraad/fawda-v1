import { ArrowLeft, Bell, Menu, Plus, Minus } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState } from "react";
import { isSameMonth, startOfToday, isBefore, addDays } from "date-fns";

const Storage = () => {
  const [selectedBoxes, setSelectedBoxes] = useState({
    small: 0,
    medium: 0,
    wardrobe: 0
  });

  const [deliveryOption, setDeliveryOption] = useState<'tomorrow' | 'schedule'>('tomorrow');
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(undefined);
  const [pickupTimeOption, setPickupTimeOption] = useState<'flexible' | 'schedule'>('flexible');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedDeliveryTimeSlot, setSelectedDeliveryTimeSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const updateBoxCount = (type: keyof typeof selectedBoxes, increment: boolean) => {
    setSelectedBoxes(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  const isDateDisabled = (date: Date) => {
    const today = startOfToday();
    return isBefore(date, today) || !isSameMonth(date, today);
  };

  return <main className="min-h-screen bg-gray-900 text-white">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => window.history.back()}>
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-serif">Fawda</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6">
        <h2 className="text-2xl mb-8">Tell us what you need</h2>
        
        <section className="mb-8">
          <h3 className="text-lg mb-4">Select boxes</h3>
          <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full">
            <CarouselContent>
              {[
                { type: 'small', size: '30 x 30 x 30cm', price: 19 },
                { type: 'medium', size: '45 x 45 x 45cm', price: 29 },
                { type: 'wardrobe', size: '60 x 60 x 90cm', price: 49 }
              ].map((box) => (
                <CarouselItem key={box.type} className="basis-[45%] pl-4">
                  <div className={`bg-gray-800 p-4 h-full rounded-xl transition-colors ${
                    selectedBoxes[box.type as keyof typeof selectedBoxes] > 0 ? 'bg-opacity-100' : 'bg-opacity-40'
                  }`}>
                    <div className="mb-2">
                      <div className="text-sm mb-1 capitalize">{box.type}</div>
                      <div className="text-xs text-gray-400">{box.size}</div>
                      <div className="text-sm">AED {box.price}/mo</div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <button 
                        onClick={() => updateBoxCount(box.type as keyof typeof selectedBoxes, false)} 
                        className="bg-gray-700 rounded-full p-1"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span>{selectedBoxes[box.type as keyof typeof selectedBoxes]}</span>
                      <button 
                        onClick={() => updateBoxCount(box.type as keyof typeof selectedBoxes, true)} 
                        className="bg-gray-700 rounded-full p-1"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        <section className="mb-8">
          <h3 className="text-lg mb-4">Box delivery</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button 
              className={`bg-gray-800 py-3 px-4 rounded-lg text-left transition-colors ${
                deliveryOption === 'tomorrow' ? 'bg-opacity-100' : 'bg-opacity-40'
              }`}
              onClick={() => {
                setDeliveryOption('tomorrow');
                setDeliveryDate(addDays(new Date(), 1));
                setSelectedDeliveryTimeSlot(null);
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
                setDeliveryOption('schedule');
                setDeliveryDate(undefined);
                setSelectedDeliveryTimeSlot(null);
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
                  onSelect={setDeliveryDate}
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
                      onClick={() => setSelectedDeliveryTimeSlot(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </section>

        <section className="mb-8">
          <h3 className="text-lg mb-4">Pick up date</h3>
          <div className={`bg-gray-800 rounded-lg p-4 transition-colors ${
            selectedDate ? 'bg-opacity-100' : 'bg-opacity-40'
          }`}>
            <CalendarComponent 
              className="rounded-lg" 
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
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
                onClick={() => setPickupTimeOption('flexible')}
              >
                <div>Flexible</div>
                <div className="text-sm text-gray-400">3-hr window</div>
              </button>
              <button 
                className={`bg-gray-800 py-3 px-4 rounded-lg text-left transition-colors ${
                  pickupTimeOption === 'schedule' ? 'bg-opacity-100' : 'bg-opacity-40'
                }`}
                onClick={() => setPickupTimeOption('schedule')}
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
                    onClick={() => setSelectedTimeSlot(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        <button className="w-full bg-gray-800 text-white py-4 rounded-lg">
          Continue
        </button>
      </div>
    </main>;
};

export default Storage;
