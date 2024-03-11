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
        <button className="relative inline-flex mb-9 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Select Category
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="bg-slate-400" style={{ overflowY: "scroll" }}>
        <SheetHeader>
          <SheetTitle className="m-4 text-2xl font-bold text-gray-900">
            Choose a Category
          </SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <SheetTrigger key={category} asChild>
              <button
                value={category}
                onClick={() => onCategoryChange(category)}
                className="p-[3px] relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px] overflow-auto relative group transition duration-200 text-white hover:bg-transparent">
                  {category}
                </div>
              </button>
            </SheetTrigger>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
