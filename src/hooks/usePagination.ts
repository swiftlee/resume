import { useState } from "react";

interface IPagination {
    prev: VoidFunction,
    next: VoidFunction,
    paginatedItems: JSX.Element[],
    page: number,
    pages: number
}

export default function usePagination(itemsPerPage: number, items: JSX.Element[]) {
    const [page, setPage] = useState(1);
    const paginatedItems = items.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    return {
        prev: () => setPage(Math.max(1, page - 1)),
        next: () => setPage(Math.min(totalPages, page + 1)),
        paginatedItems,
        page,
        pages: totalPages
    };
}