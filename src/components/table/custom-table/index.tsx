"use client";
import {
  Box,
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
import { pxToRem } from "@/utils/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CustomTable = (props: CustomTablePropsI) => {
  const {
    ariaLabelTable = "main-table",
    minWidth = 700,
    stickyHeader = false,
  } = props;

  const { table } = useCustomTable(props);

  return (
    <TableContainer>
      <Table
        stickyHeader={stickyHeader}
        sx={{ minWidth: pxToRem(minWidth) }}
        aria-label={ariaLabelTable}
      >
        <TableHead>
          {table?.getHeaderGroups()?.map((headerGroup: any) => (
            <TableRow
              sx={{
                backgroundColor: "primary.light",
                textTransform: "capitalize",
                borderRadius: 1,
              }}
              key={headerGroup?.id}
            >
              {headerGroup?.headers.map((header: any) => (
                <TableCell
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "fontWeightBold",
                    borderBottom: "primary.light",
               
                  }}
                  key={header?.id}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {header?.isPlaceholder
                      ? null
                      : flexRender(
                          header?.column?.columnDef?.header,
                          header?.getContext(),
                        )}
                    {header?.column?.columnDef?.isSortable && (
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        marginLeft={"4px"}
                        gap={"2px"}
                        {...{
                          onClick: header?.column?.getToggleSortingHandler(),
                        }}
                      >
                        <KeyboardArrowUpIcon
                          sx={{
                            fontSize: "medium",
                            color:
                              (header?.column?.getIsSorted() as string) ===
                              "desc"
                                ? "common.black"
                                : "",
                          }}
                        />
                        <KeyboardArrowDownIcon
                          sx={{
                            fontSize: "medium",
                            color:
                              (header?.column?.getIsSorted() as string) ===
                              "asc"
                                ? "common.black"
                                : "",
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table?.getRowModel()?.rows?.map((row: any) => (
            <TableRow key={row?.id}>
              {row?.getVisibleCells()?.map((cell: any) => (
                <TableCell
                  sx={{
                    textTransform: "capitalize",
                    borderColor: "common.border",
                  }}
                  key={cell?.id}
                >
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
