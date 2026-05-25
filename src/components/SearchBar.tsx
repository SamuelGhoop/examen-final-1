import { BiSearch } from "react-icons/bi";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: Props) {
  return (<h1>
    <BiSearch></BiSearch>
    
    <input
      type="text"
      placeholder="Busca tu pokemon..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />

    </h1>
  );
}
export default SearchBar;