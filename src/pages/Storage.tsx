
import { useState } from "react";
import { Header } from "@/components/storage/Header";
import { BoxSelection } from "@/components/storage/BoxSelection";
import { BoxDelivery } from "@/components/storage/BoxDelivery";
import { PickupSchedule } from "@/components/storage/PickupSchedule";

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

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="px-4 py-6 max-w-3xl mx-auto">
        <h1 className="text-[2.75rem] leading-tight font-serif text-gray-900 mb-2">Select storage size</h1>
        <p className="text-gray-600 text-lg mb-8">What would you like to store with us?</p>
        
        <BoxSelection 
          selectedBoxes={selectedBoxes}
          onUpdateBoxCount={updateBoxCount}
        />

        <BoxDelivery 
          deliveryOption={deliveryOption}
          deliveryDate={deliveryDate}
          selectedDeliveryTimeSlot={selectedDeliveryTimeSlot}
          onDeliveryOptionChange={setDeliveryOption}
          onDeliveryDateChange={setDeliveryDate}
          onDeliveryTimeSlotChange={setSelectedDeliveryTimeSlot}
        />

        <PickupSchedule 
          selectedDate={selectedDate}
          pickupTimeOption={pickupTimeOption}
          selectedTimeSlot={selectedTimeSlot}
          onDateChange={setSelectedDate}
          onTimeOptionChange={setPickupTimeOption}
          onTimeSlotChange={setSelectedTimeSlot}
        />

        <button className="w-full bg-teal-600 text-white py-4 rounded-lg text-lg font-medium hover:bg-teal-700 transition-colors">
          Continue
        </button>
      </div>
    </main>
  );
};

export default Storage;
