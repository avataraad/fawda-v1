
import { Plus, Minus } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface BoxSelectionProps {
  selectedBoxes: {
    small: number;
    medium: number;
    wardrobe: number;
  };
  onUpdateBoxCount: (type: 'small' | 'medium' | 'wardrobe', increment: boolean) => void;
}

export const BoxSelection = ({ selectedBoxes, onUpdateBoxCount }: BoxSelectionProps) => {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-serif text-gray-900 mb-6">Select boxes</h3>
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
            <CarouselItem key={box.type} className="basis-[calc(50%-12px)] pl-4">
              <div className={`bg-white p-6 h-full rounded-xl transition-all duration-300 border ${
                selectedBoxes[box.type as keyof typeof selectedBoxes] > 0 
                ? 'border-teal-600 shadow-md' 
                : 'border-gray-200'
              }`}>
                <div className="mb-4">
                  <div className="text-lg font-medium text-gray-900 capitalize mb-1">{box.type}</div>
                  <div className="text-sm text-gray-500">{box.size}</div>
                  <div className="text-lg font-medium text-teal-600 mt-2">AED {box.price}/mo</div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button 
                    onClick={() => onUpdateBoxCount(box.type as keyof typeof selectedBoxes, false)} 
                    className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                  >
                    <Minus className="h-5 w-5 text-gray-600" />
                  </button>
                  <span className="text-lg font-medium">{selectedBoxes[box.type as keyof typeof selectedBoxes]}</span>
                  <button 
                    onClick={() => onUpdateBoxCount(box.type as keyof typeof selectedBoxes, true)} 
                    className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                  >
                    <Plus className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
