import { FC } from "react";
import { MaxWidthComponent } from "./MaxWidthComponent";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  handleChange: (page: number) => void;
  showNextPrevButtons?: boolean;
  pageSize?: number;
}

export const CustomPagination: FC<PaginationProps> = ({
  totalItems,
  currentPage,
  handleChange,
  pageSize = 20,
  showNextPrevButtons,
}) => {
  return (
    <MaxWidthComponent className="flex justify-center items-center">
      <Pagination
        total={totalItems}
        current={currentPage}
        onChange={handleChange}
        pageSize={pageSize}
        showPrevNextJumpers={showNextPrevButtons}
      />
    </MaxWidthComponent>
  );
};
