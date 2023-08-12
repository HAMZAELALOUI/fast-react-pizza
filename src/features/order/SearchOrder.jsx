import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Insert a  order number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="first-letter first-letter first-letter first-letter w-28
         rounded-full bg-yellow-100 px-4 py-2 transition-all 
          duration-300 placeholder:text-stone-400 sm: focus:w-72 focus:outline-none 
          focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
