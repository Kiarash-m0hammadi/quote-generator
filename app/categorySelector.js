import { categories } from "@/utils/categories ";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function CategorySelector({ onCategoryChange }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>Select Category</button>
      </SheetTrigger>
      <SheetContent style={{ overflowY: "scroll" }}>
        <SheetHeader>
          <SheetTitle>Choose a Category</SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              value={category}
              onClick={() => onCategoryChange(category)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {category}
            </button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
