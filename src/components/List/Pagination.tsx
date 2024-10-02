"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    Pagination as ShadcnPagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export function Pagination({
    currentPage,
    totalPages,
}: {
    currentPage: number;
    totalPages: number;
}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const handlePageChange = (page: number) => {
        if (page === currentPage || page < 1 || page > totalPages) return;
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        router.replace(`${pathname}?${params.toString()}`);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 3;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            onClick={() => handlePageChange(i)}
                            isActive={currentPage === i}
                            className={
                                currentPage === i
                                    ? "pointer-events-none"
                                    : "cursor-pointer"
                            }
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                );
            }
        } else {
            const startPage = Math.max(1, currentPage - 1);
            const endPage = Math.min(
                totalPages,
                startPage + maxVisiblePages - 1
            );

            if (startPage > 1) {
                pageNumbers.push(
                    <PaginationItem key={1}>
                        <PaginationLink
                            className="cursor-pointer"
                            onClick={() => handlePageChange(1)}
                        >
                            1
                        </PaginationLink>
                    </PaginationItem>
                );
                if (startPage > 2) {
                    pageNumbers.push(
                        <PaginationEllipsis key="ellipsis-start" />
                    );
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            className={
                                currentPage === i
                                    ? "pointer-events-none"
                                    : "cursor-pointer"
                            }
                            onClick={() => handlePageChange(i)}
                            isActive={currentPage === i}
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                );
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.push(<PaginationEllipsis key="ellipsis-end" />);
                }
                pageNumbers.push(
                    <PaginationItem key={totalPages}>
                        <PaginationLink
                            className="cursor-pointer"
                            onClick={() => handlePageChange(totalPages)}
                        >
                            {totalPages}
                        </PaginationLink>
                    </PaginationItem>
                );
            }
        }

        return pageNumbers;
    };

    return (
        <ShadcnPagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        className={
                            currentPage === 1
                                ? "hidden sm:flex pointer-events-none opacity-50"
                                : "hidden sm:flex cursor-pointer"
                        }
                        onClick={() => handlePageChange(currentPage - 1)}
                    />
                </PaginationItem>
                {renderPageNumbers()}
                <PaginationItem>
                    <PaginationNext
                        className={
                            currentPage === totalPages
                                ? "hidden sm:flex pointer-events-none opacity-50"
                                : "hidden sm:flex cursor-pointer"
                        }
                        onClick={() => handlePageChange(currentPage + 1)}
                    />
                </PaginationItem>
            </PaginationContent>
        </ShadcnPagination>
    );
}