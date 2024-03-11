import { categories } from "@/utils/categories ";
export default function CategorySelector({ category, onCategoryChange }) {
  return (
    <select value={category} onChange={onCategoryChange}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
