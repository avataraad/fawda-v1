
import { ArrowLeft, Bell, Menu, Calendar, Plus, Minus } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";

const Storage = () => {
  const [selectedBoxes, setSelectedBoxes] = useState({
    small: 0,
    medium: 0,
    wardrobe: 0
  });

  const updateBoxCount = (type: keyof typeof selectedBoxes, increment: boolean) => {
    setSelectedBoxes(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
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
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="mb-2">
                <div className="text-sm mb-1">Small</div>
                <div className="text-xs text-gray-400">30 x 30 x 30cm</div>
                <div className="text-sm">AED 19/mo</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button 
                  onClick={() => updateBoxCount('small', false)}
                  className="bg-gray-700 rounded-full p-1"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span>{selectedBoxes.small}</span>
                <button 
                  onClick={() => updateBoxCount('small', true)}
                  className="bg-gray-700 rounded-full p-1"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <div className="mb-2">
                <div className="text-sm mb-1">Medium</div>
                <div className="text-xs text-gray-400">45 x 45 x 45cm</div>
                <div className="text-sm">AED 29/mo</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button 
                  onClick={() => updateBoxCount('medium', false)}
                  className="bg-gray-700 rounded-full p-1"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span>{selectedBoxes.medium}</span>
                <button 
                  onClick={() => updateBoxCount('medium', true)}
                  className="bg-gray-700 rounded-full p-1"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <div className="mb-2">
                <div className="text-sm mb-1">Wardrobe</div>
                <div className="text-xs text-gray-400">60 x 60 x 90cm</div>
                <div className="text-sm">AED 49/mo</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button 
                  onClick={() => updateBoxCount('wardrobe', false)}
                  className="bg-gray-700 rounded-full p-1"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span>{selectedBoxes.wardrobe}</span>
                <button 
                  onClick={() => updateBoxCount('wardrobe', true)}
                  className="bg-gray-700 rounded-full p-1"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg mb-4">Box delivery</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-800 py-3 px-4 rounded-lg text-left">
              Tomorrow
            </button>
            <button className="bg-gray-800 py-3 px-4 rounded-lg text-left">
              <div>Schedule</div>
              <div className="text-sm text-gray-400">Extra AED 9</div>
            </button>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg mb-4">Pick up date</h3>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5" />
              <span>March 2025</span>
            </div>
            <CalendarComponent 
              className="rounded-lg"
              mode="single"
              selected={new Date()}
              onSelect={() => {}}
            />
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg mb-4">Pick up time</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button className="bg-gray-800 py-3 px-4 rounded-lg text-left">
              <div>Flexible</div>
              <div className="text-sm text-gray-400">3-hr window</div>
            </button>
            <button className="bg-gray-800 py-3 px-4 rounded-lg text-left">
              <div>Schedule</div>
              <div className="text-sm text-gray-400">Extra AED 9</div>
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {["09:00 - 12:00", "12:00 - 15:00", "15:00 - 18:00", "18:00 - 21:00"].map((time) => (
              <button key={time} className="bg-gray-800 p-2 rounded-lg text-center text-sm">
                {time}
              </button>
            ))}
          </div>
        </section>

        <button className="w-full bg-gray-800 text-white py-4 rounded-lg">
          Continue
        </button>
      </div>
    </main>
  );
};

export default Storage;
