interface Props {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Busca tu pokemon..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
export default SearchBar;