"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { EditIcon, TrashIcon } from "../../icons";
import { Button } from "./button";
import { TableSkeleton } from "../ui/table-skeleton";
import { cn } from "../../lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageIndex: number;
  pageSize: number;
  className?: string;
  emptyState?: React.ReactNode;
  globalFilterQuery?: string;
  isLoading?: boolean;
  error?: boolean;
  handleEdit?: (row: TData) => void;
  handleRemove?: (row: TData) => void;
  customActions?: ColumnDef<TData, TValue>[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className,
  emptyState,
  globalFilterQuery,
  isLoading,
  error,
  handleEdit,
  handleRemove,
  customActions = [],
}: DataTableProps<TData, TValue>) {
  const actionColumns: ColumnDef<TData, TValue>[] = [];

  if (handleEdit) {
    actionColumns.push({
      id: "edit",
      header: "",
      cell: ({ row }) => (
        <Button
          variant="tertiary-gray"
          size="sm"
          onClick={() => handleEdit(row.original)}
          className="p-2.5"
        >
          <EditIcon height={20} width={20} />
        </Button>
      ),
      enableSorting: false,
      enableColumnFilter: false,
    });
  }

  if (handleRemove) {
    actionColumns.push({
      id: "remove",
      header: "",
      cell: ({ row }) => (
        <Button
          variant="tertiary-color"
          size="sm"
          onClick={() => handleRemove(row.original)}
          className="text-error-600 hover:text-error-600 p-2.5"
        >
          <TrashIcon height={20} width={20} />
        </Button>
      ),
      enableSorting: false,
      enableColumnFilter: false,
    });
  }

  const finalColumns = [...columns, ...actionColumns, ...customActions];

  const table = useReactTable({
    data,
    columns: finalColumns,
    state: {
      globalFilter: globalFilterQuery ?? "",
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, _columnId, filterValue) => {
      const query = String(filterValue).toLowerCase();

      return row
        .getAllCells()
        .filter((cell) => cell.column.columnDef.enableColumnFilter !== false)
        .some((cell) => {
          const customFilterFn = cell.column.columnDef.filterFn;

          if (typeof customFilterFn === "function") {
            return customFilterFn(row, cell.column.id, filterValue, () => {});
          }

          return String(cell.getValue() ?? "")
            .toLowerCase()
            .includes(query);
        });
    },
  });

  if (error) {
    return (
      <div className="flex h-96 w-full items-center justify-center text-center text-sm text-red-500">
        Something went wrong while loading the data. Please try again later.
      </div>
    );
  }

  return (
    <div className={cn("text-tertiary w-full text-sm font-medium", className)}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const isSortable = header.column.getCanSort();

                return (
                  <TableHead
                    key={header.id}
                    onClick={() => {
                      if (isSortable) header.column.toggleSorting();
                    }}
                    className={isSortable ? "cursor-pointer select-none" : ""}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {isSortable && (
                      <span className="ml-1">
                        {{
                          asc: "↑",
                          desc: "↓",
                        }[header.column.getIsSorted() as string] ?? ""}
                      </span>
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        {isLoading ? (
          <TableSkeleton />
        ) : (
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={finalColumns.length}
                  className="h-24 text-center"
                >
                  {emptyState ?? <div>No results.</div>}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        )}
      </Table>
    </div>
  );
}
