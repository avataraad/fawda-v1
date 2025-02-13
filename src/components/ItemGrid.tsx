import { Archive } from "lucide-react";
interface Item {
  id: number;
  title: string;
}
const items: Item[] = [{
  id: 1,
  title: "Item 1"
}, {
  id: 2,
  title: "Item 2"
}, {
  id: 3,
  title: "Item 3"
}, {
  id: 4,
  title: "Item 4"
}, {
  id: 5,
  title: "Item 5"
}, {
  id: 6,
  title: "Item 6"
}, {
  id: 7,
  title: "Item 7"
}, {
  id: 8,
  title: "Item 8"
}, {
  id: 9,
  title: "Item 9"
}, {
  id: 10,
  title: "Item 10"
}, {
  id: 11,
  title: "Item 11"
}, {
  id: 12,
  title: "Item 12"
}];
const ItemGrid = () => {
  return <div className="px-4 grid grid-cols-2 gap-4 pb-24 pt-4">
      {items.map(item => <div key={item.id} className="aspect-square rounded-2xl border border-gray-200 flex items-center justify-center bg-gray-50 py-0 my-0">
          <div className="text-center">
            <Archive className="h-6 w-6 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-900">{item.title}</p>
          </div>
        </div>)}
    </div>;
};
export default ItemGrid;