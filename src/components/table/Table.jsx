"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";
import Image from "next/image";

const data = [
  {
    imageUrl: "/Ellipse 21.png",
    id: "m5gr84i9",
    amount: 316,
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    status: "success",
  },
  {
    imageUrl: "/Ellipse 21.png",
    id: "3u1reuv4",
    amount: 242,
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    imageUrl: "/Ellipse 21.png",
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "Silas22@gmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    Name: "Tomi",
    email: "ken99@yahoo.com",
    Number: "1234567890",
    Location: "New York",
    email: "carmella@hotmail.com",
    imageUrl: "/Ellipse 21.png",
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("id")}</div>
    ),
  },
  // {
  //   accessorKey: "imageUrl",
  //   header: "Images",
  //   cell: ({ row }) => (
  //     <div className="capitalize">{row.getValue("imageUrl")}
  //       <Image
  //       src={imageUrl}
  //           alt="Item Image"
  //           className="w-12 h-12 rounded-full object-cover"
  //           width={50}
  //           height={50}
  //         />
      
  //     </div>
  //   ),
  // },
  {
    accessorKey: "Name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Name")}</div>
    ),
  },
  {
    accessorKey: "Location",
    header: "Location",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Location")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Suspend Account</DropdownMenuItem>
            <DropdownMenuItem>Expel</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Users..."
          value={(table.getColumn("email")?.getFilterValue() ?? "")}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
