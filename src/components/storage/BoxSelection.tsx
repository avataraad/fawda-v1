
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
                    onClick={() => onUpdateBoxCount(box.type as keyof typeof selectedBoxes, false)} 
                    className="bg-gray-700 rounded-full p-1"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span>{selectedBoxes[box.type as keyof typeof selectedBoxes]}</span>
                  <button 
                    onClick={() => onUpdateBoxCount(box.type as keyof typeof selectedBoxes, true)} 
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
  );
};
