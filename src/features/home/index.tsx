"use client";
import CustomTable from "@/components/table/custom-table";
import { useHome } from "./use-home";

export const HomeFeature = () => {
  const { column, renderData } = useHome();
  return (
    <>
      <>Table</>
      <CustomTable columns={column} data={renderData} />
    </>
  );
};
