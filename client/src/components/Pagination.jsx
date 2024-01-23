import { useEffect } from "react"
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons"
import uuid from "react-uuid"

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
    const pages = [...Array(totalPages + 1).keys()].slice(1)
    const next = () => {
        if (currentPage !== totalPages) setCurrentPage(currentPage + 1)
    }
    const prev = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    useEffect(() => {
        window.scrollTo({ top: 420 })
    }, [currentPage])

    return (
        <ul className="flex justify-center mb-7 mt-4 items-center gap-4">
            <li
                className={`border p-2  transition duration-500 ${currentPage === 1 ? "opacity-50" : "hover:bg-secondary hover:text-white cursor-pointer"}`}
                onClick={prev}><ArrowLeft /></li>
            {pages.map((page) => (
                <li
                    className={`border px-2 py-1  transition duration-500 hover:bg-primary hover:text-white cursor-pointer 
                ${currentPage === page ? "bg-primary text-white" : "transparent"}`}
                    key={uuid()}
                    onClick={() => setCurrentPage(page)}>{page}</li>
            ))}
            <li
                className={`border p-2  transition duration-500 ${currentPage === totalPages ? "opacity-50" : "hover:bg-secondary hover:text-white cursor-pointer"}`}
                onClick={next}><ArrowRight /></li>
        </ul>
    )
}
export default Pagination