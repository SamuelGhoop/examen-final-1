import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div>
      <FaSpinner className="animate-spin" />
      <p>Cargando...</p>
    </div>
  );
}
export default Loader;