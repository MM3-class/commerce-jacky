import { ArrowRightSquareFill } from "react-bootstrap-icons"
import Button from "../../components/Button"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getSearchTerm } from "./searchTermSlice";
import { useState } from "react";

const SearchTerm = () => {
  const [searchInput, setSearchInput] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    dispatch(getSearchTerm(searchInput))
    navigate('/search')
    setSearchInput("")
  }

  return (
    <div className="relative">
      <input
        type="text"
        className="bg-gray-100 p-2 outline-none shadow-sm sm:w-[300px] xl:w-[400px] text-sm lg:text-xl placeholder:text-xs"
        placeholder="What are you looking for?"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)} />
      <Button
        onClick={handleSubmit}
        className={`absolute -right-3 md:right-4 -translate-y-1/2 top-1/2 lg:text-xl text-sm ${searchInput.length && "text-green-500"}`}>
        <ArrowRightSquareFill />
      </Button>
    </div>
  )
}

export default SearchTerm