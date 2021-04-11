import anime from "animejs";
import { useState } from "react";

interface IPagination {
    prev: VoidFunction,
    next: VoidFunction,
    paginatedItems: JSX.Element[],
    page: number,
    pages: number,
    transitioning: boolean
}


export default function usePagination(itemsPerPage: number, items: JSX.Element[]) {
    const [page, setPage] = useState(1);
    const [transitioning, setTransitioning] = useState<boolean>(false);

    const paginatedItems = items.slice(page * itemsPerPage - itemsPerPage, page * itemsPerPage);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const jumpToPage = (currentPageNum: number, newPageNumber: number, setPage: (pageNum: number) => void) => {
        if (currentPageNum === newPageNumber) return
        flipAnimation(newPageNumber > currentPageNum ? undefined : 'reverse').then(() => delayAndExec(() => setPage(newPageNumber)))
    }

    const next = (page: number, totalPages: number, setPage: (val: number) => void) => {
        if (totalPages > page)
            flipAnimation().then(() => delayAndExec(() => setPage(page + 1)))
    }

    const prev = (page: number, setPage: (minValue: number) => void) => {
        if (page > 1)
            flipAnimation('reverse').then(() => delayAndExec(() => setPage(page - 1)))
    }

    const delayAndExec = (fn: () => void) => {
        setTimeout(() => {
            fn()
            setTransitioning(false)
        }, 300)
    }

    const flipAnimation = async (direction: string = 'normal') => {
        setTransitioning(true)
        anime({
            targets: '#experience-grid-items',
            opacity: [
                { value: 1, duration: 0 },
                { value: 0, duration: 150 },
                { value: 1, duration: 150, delay: 225 }
            ],
            translateX: [
                { value: 0, duration: 0 },
                { value: -100, duration: 150 },
                { value: 100, duration: 0 },
                { value: 0, duration: 150, delay: 225 }
            ],
            easing: 'linear',
            direction: direction,
            autoplay: true
        })
    }

    return {
        prev: () => prev(page, setPage),
        next: () => next(page, totalPages, setPage),
        setPage: (pageNum: number) => jumpToPage(page, pageNum, () => setPage(pageNum)),
        paginatedItems,
        page,
        pages: totalPages,
        transitioning
    };
}