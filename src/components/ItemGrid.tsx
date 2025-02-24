
import { Archive } from "lucide-react";

interface Item {
  id: number;
  title: string;
  description: string;
  image?: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Christmas Decorations",
    description: "Trees, lights, and ornaments",
    image: "/lovable-uploads/6cae22c4-5ada-42ec-b7ae-7b039d2f843b.png"
  },
  {
    id: 2,
    title: "Bicycles",
    description: "Mountain and road bikes",
    image: "/lovable-uploads/1e59d9b6-9cab-452e-8557-bfbc9250323d.png"
  },
  {
    id: 3,
    title: "Skiis",
    description: "Skis and winter gear",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Camping Gear",
    description: "Tents and equipment",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Baby",
    description: "Clothes and furniture",
    image: "/placeholder.svg"
  }
];

const ItemGrid = () => {
  return (
    <div className="px-4 grid grid-cols-2 gap-4 pb-24 pt-4">
      {items.map(item => (
        <div 
          key={item.id} 
          className="rounded-2xl border border-gray-200 overflow-hidden bg-white aspect-square"
        >
          <div className="aspect-[3/2] w-full bg-gray-50">
            {item.image ? (
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Archive className="h-12 w-12 text-gray-400" />
              </div>
            )}
          </div>
          <div className="p-3 text-center">
            <p className="font-bold text-gray-900 text-sm truncate">{item.title}</p>
            <p className="text-gray-500 text-xs truncate mt-0.5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;
