import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";

import { getRows } from "./getRows";
import {
  rowNameStyles,
  rowStyles,
  rowValueStyles,
  tableStyles,
} from "./styles";

interface IPetInfoTableProps {
  notice: Notice;
}

const PetInfoTable: React.FC<IPetInfoTableProps> = ({ notice }) => {
  const rows = getRows(notice);

  return (
    <TableContainer>
      <Table sx={tableStyles} aria-label="pet info">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={rowStyles}>
              <TableCell component="th" scope="row" sx={rowNameStyles}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={rowValueStyles}>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PetInfoTable;
