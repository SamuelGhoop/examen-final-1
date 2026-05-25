import { BiSearch } from "react-icons/bi";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: Props) {
  return (<h1>
    <BiSearch className="text-6xl centered font-bold text-red-600"></BiSearch>
    
    <input className="text-2xl centered font-bold text-black-600"
      type="text"
      placeholder="Busca tu pokemon..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />

    </h1>
  );
}
export default SearchBar;