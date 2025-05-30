import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { useEmployees } from "../hooks/useEmployees";
import styled from "styled-components";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Panel } from "../components/organisms";
import { Label, Input, Button } from "../components/atoms";
import { Search } from "../components/molecules";

const TableWrapper = styled.div`
  overflow-x: auto;
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
  padding-right: 2px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #dfe4e4;
  font-size: 12px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 1rem;
`;

const SortIcon = ({ isSorted }) => {
  return (
    <div
      style={{
        marginLeft: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span style={{ color: isSorted === "asc" ? "#000" : "#ccc" }}>▲</span>
      <span style={{ color: isSorted === "desc" ? "#000" : "#ccc" }}>▼</span>
    </div>
  );
};

SortIcon.propTypes = {
  isSorted: PropTypes.object,
};

function EmployeeList() {
  const { employees: data } = useEmployees();
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const columnHelper = createColumnHelper();

  /*Ces useState permettent de :
Appliquer des filtres spécifiques (columnFilters)
Filtrer tous les champs (globalFilter)
Trier les colonnes (sorting)
Gérer le nombre de lignes affichées (pageSize)*/

  const columns = useMemo(() => {
    return [
      columnHelper.accessor("firstName", {
        header: "First Name",
        enableSorting: true,
        enableColumnFilter: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("lastName", {
        header: "Last Name",
        enableSorting: true,
        enableColumnFilter: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("startDate", {
        header: "Start Date",
        enableSorting: true,
        enableColumnFilter: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("department", {
        header: "Department",
        enableSorting: true,
        enableColumnFilter: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("birthDate", {
        header: "Date of Birth",
        enableSorting: true,
        enableColumnFilter: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("street", {
        header: "Street",
        enableSorting: true,
        enableColumnFilter: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("city", {
        header: "City",
        enableSorting: true,
        enableColumnFilter: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("state", {
        header: "State",
        enableSorting: true,
        enableColumnFilter: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("zipCode", {
        header: "Zip Code",
        enableSorting: true,
        enableColumnFilter: true,
        cell: (info) => info.getValue(),
      }),
      columnHelper.display({
        id: "select",
        header: () => (
          <Input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <Input
            type="checkbox"
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      }),
    ];
  }, [columnHelper]);

  /*On utilise useMemo pour ne pas recalculer les colonnes à chaque rendu.
Chaque colonne a un accessor (clé dans l'objet employé).
Une colonne personnalisée avec des checkbox permet la sélection des lignes.*/

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      globalFilter,
      sorting,
      pagination: {
        pageSize,
        pageIndex: 0,
      },
      rowSelection: {},
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
  });

  /*useReactTable() est le moteur du tableau.
Il gère : tri, filtre, pagination, sélection.
Les valeurs comme columnFilters et sorting sont liées aux useState pour réagir aux actions de l'utilisateur.
*/

  return (
    <Panel>
      <>
        <Flex style={{ marginBottom: "4px" }}>
          <Flex>
            Show
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
            </Select>
            entries
          </Flex>

          <Search
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </Flex>

        <TableWrapper>
          <Table>
            <Header>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      style={{
                        cursor: header.column.getCanSort()
                          ? "pointer"
                          : "default",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <SortIcon isSorted={header.column.getIsSorted()} />
                        )}
                      </div>
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
              {table.getRowModel().rows.length > 0
                ? table.getState().pagination.pageIndex *
                    table.getState().pagination.pageSize +
                  1
                : 0}{" "}
              to{" "}
              {table.getState().pagination.pageIndex *
                table.getState().pagination.pageSize +
                table.getRowModel().rows.length}{" "}
              of {table.getFilteredRowModel().rows.length} entries
            </strong>
          </span>

          <Flex>
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

/*Élément	Fonction
useEmployees()	Récupère les employés via contexte
useState()	Gère les filtres, tri, pagination
useMemo()	Mémorise la structure des colonnes
useReactTable()	Génère toutes les fonctionnalités du tableau
@tanstack/react-table	Puissante librairie pour les tableaux dynamiques
styled-components	Gère les styles du tableau et de ses composants
flexRender()	Rend le contenu dynamique (cellules, en-têtes, etc.)
*/
