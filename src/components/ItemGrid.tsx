
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
    title: "Winter Clothes",
    description: "Coats, sweaters, and boots",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Books",
    description: "Old university textbooks",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Kitchen Items",
    description: "Extra plates and utensils"
  },
  {
    id: 4,
    title: "Documents",
    description: "Important paperwork and files",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Electronics",
    description: "Old phones and cables"
  }
];

const ItemGrid = () => {
  return (
    <div className="px-4 grid grid-cols-2 gap-4 pb-24 pt-4">
      {items.map(item => (
        <div 
          key={item.id} 
          className="rounded-2xl border border-gray-200 overflow-hidden bg-white"
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
          <div className="p-3">
            <p className="font-bold text-gray-900 text-sm">{item.title}</p>
            <p className="text-gray-500 text-xs mt-1">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;
