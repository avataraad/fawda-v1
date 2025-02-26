
import { Archive } from "lucide-react";

interface Item {
  id: number;
  title: string;
  description: string;
  image?: string;
}

const items: Item[] = [{
  id: 1,
  title: "Christmas Decorations",
  description: "Trees, lights, and ornaments",
  image: "/lovable-uploads/6cae22c4-5ada-42ec-b7ae-7b039d2f843b.png"
}, {
  id: 2,
  title: "Bicycles",
  description: "Mountain and road bikes",
  image: "/lovable-uploads/1e59d9b6-9cab-452e-8557-bfbc9250323d.png"
}, {
  id: 3,
  title: "Skiis",
  description: "Skis and winter gear",
  image: "/placeholder.svg"
}, {
  id: 4,
  title: "Camping Gear",
  description: "Tents and equipment",
  image: "/placeholder.svg"
}, {
  id: 5,
  title: "Baby",
  description: "Clothes and furniture",
  image: "/placeholder.svg"
}];

const ItemGrid = () => {
  return (
    <div className="px-4 grid grid-cols-2 gap-4 pb-24">
      {items.map(item => (
        <div key={item.id} 
             className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-teal-600">
          <div className="aspect-[3/2] w-full bg-gray-50 group-hover:opacity-95 transition-opacity">
            {item.image ? (
              <img src={item.image} 
                   alt={item.title} 
                   className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Archive className="h-12 w-12 text-gray-400" />
              </div>
            )}
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-900 text-base mb-1">{item.title}</p>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;
