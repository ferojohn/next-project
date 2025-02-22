import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchProductProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchProduct:React.FC<SearchProductProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center items-center text-center">
      <Input
        className="w-[180px]"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline" className="ml-2">Search</Button>
    </div>
  );
};

export default SearchProduct;
