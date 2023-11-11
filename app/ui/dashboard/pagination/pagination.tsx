"use client";

import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CountProps{
    count:number;
}
const Pagination:React.FC<CountProps> = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page : any | string = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  // const handleChangePage = (type:any) => {
  //   type === "prev"
  //     ? params.set("page", parseInt(page) - 1)
  //     : params.set("page", parseInt(page) + 1);
  //   replace(`${pathname}?${params}`);
  // };

  const handleChangePage = (type: any) => {
    const newPage = type === "prev" ? parseInt(page) - 1 : parseInt(page) + 1;
    params.set("page", newPage.toString()); // Convert the number to a string
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;