"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCustomTable } from "./use-custom-table";
import { CustomTablePropsI } from "../table.interface";
import { flexRender } from "@tanstack/react-table";

const CustomTable = (props: CustomTablePropsI) => {
  const { table } = useCustomTable(props);
  console.log(table.getHeaderGroups());
  return (
    <TableContainer>
      <Table>
        <TableHead>
          {table
            ?.getHeaderGroups()
            ?.map((headerGroup: any) => (
              <TableRow key={headerGroup?.id}>
                {headerGroup?.headers.map((header: any) => (
                  <TableCell key={header?.id}>
                    {header?.isPlaceholder
                      ? null
                      : flexRender(
                          header?.column?.columnDef?.header,
                          header?.getContext(),
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableHead>
        <TableBody>
          {table
            ?.getRowModel()
            ?.rows?.map((row: any) => (
              <TableRow id={row?.id}>
                {row
                  ?.getVisibleCells()
                  ?.map((cell: any) => (
                    <TableCell key={cell?.id}>
                      {flexRender(
                        cell?.column?.columnDef?.cell,
                        cell?.getContext(),
                      )}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
