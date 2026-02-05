import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function DataTabel({ data, selectedId, onRowClick }) {
  const sortedData = [...data].sort((a, b) =>
    a.projectName.localeCompare(b.projectName),
  );


  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Project Name</TableCell>
          <TableCell>Latitude</TableCell>
          <TableCell>Longitude</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Last Updated</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map((row) => (
          <TableRow
            key={row.id}
            onClick={() => onRowClick(row.id)}
            style={{
              background: selectedId === row.id ? "#d3f4ff" : "white",
              cursor: "pointer",
            }}
          >
            <TableCell>{row.projectName}</TableCell>
            <TableCell>{row.latitude}</TableCell>
            <TableCell>{row.longitude}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>{row.lastUpdated}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

