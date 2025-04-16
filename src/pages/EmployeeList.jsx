import { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import styled from "styled-components";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Panel from "../components/ui/Panel";
import { Label, Search } from "../components/ui/Form";

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 1rem;
`;

const Table = styled.table`
  background-color: #eaecec;
  border: 1px solid #bfc5c5;
  width: 100%;
  border-collapse: collapse;
`;

const Header = styled.thead`
  tr {
    font-size: 14px;
    text-align: center;
    color: #2d2f33;
    background-color: #f4f6f8;
  }

  th {
    font-weight: 600;
    border-bottom: 2px solid #bfc5c5;
    border-right: 1px solid #d0d4d4;
    padding: 8px;
    &:last-child {
      border-right: none;
    }
  }
`;

const Body = styled.tbody`
  tr {
    font-size: 12px;
    color: #5d6069;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #dfe4e4;
    }
  }

  td {
    border-bottom: 1px solid #bfc5c5;
    padding: 6px 8px;
  }
`;

const Select = styled.select`
  padding: 5px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  font-size: 14px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "space-between"};
  align-items: center;
  gap: ${({ gap }) => gap || "0"};
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 6px 12px;
  margin: 0 2px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#5b9bd5")};
  color: white;
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#407ec9")};
  }
`;

function EmployeeList() {
  const data = useLoaderData();
  const columnHelper = createColumnHelper();

  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const columns = useMemo(
    () => [
      columnHelper.accessor("firstName", {
        header: "First Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("lastName", {
        header: "Last Name",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("startDate", {
        header: "Start Date",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("department", {
        header: "Department",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("dateOfBirth", {
        header: "Date of Birth",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("street", {
        header: "Street",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("city", {
        header: "City",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("State", {
        header: "State",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("zipCode", {
        header: "Zip Code",
        cell: (info) => info.getValue(),
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination: {
        pageSize,
        pageIndex: 0,
      },
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Panel>
      <>
        <Flex>
          <Flex gap="10px">
            Show{" "}
            <Select
              value={pageSize}
              onChange={(e) => {
                const size = Number(e.target.value);
                setPageSize(size);
                table.setPageSize(size);
              }}
            >
              {[10, 25, 50, 100].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>{" "}
            entries
          </Flex>

          <Search
            type="text"
            placeholder="Search..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Flex>

        <TableWrapper>
          <Table>
            <Header>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </Header>
            <Body>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </Body>
          </Table>
        </TableWrapper>

        <Flex>
          <span>
            Showing{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>{" "}
            entries
          </span>

          <Flex gap="10px">
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>

            <Label>{table.getState().pagination.pageIndex + 1}</Label>

            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </>
    </Panel>
  );
}

export default EmployeeList;
