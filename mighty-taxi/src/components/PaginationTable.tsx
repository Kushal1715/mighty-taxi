import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  {
    field: "contactNumber",
    headerName: "Contact Number",
    type: "number",
    width: 130,
  },
  {
    field: "lastActivedAt",
    headerName: "Last Actived At",
    width: 160,
  },
  {
    field: "appVersion",
    headerName: "App Version",
    width: 130,
  },
  {
    field: "createdDate",
    headerName: "Created Date",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
  },
  {
    field: "action",
    headerName: "Action",
    width: 160,
  },
];

// Props type
type Props = {
  riders: any;
};

export default function PaginationTable({ riders }: Props) {
  // Map riders to match rows structure
  const rows = riders.map((rider: any, index: number) => ({
    id: rider.id || index + 1, // Fallback to index if id is missing
    name: rider.firstName + rider.lastName,
    email: rider.email || "N/A",
    contactNumber: rider.contactNumber || "N/A",
    lastActivedAt: rider.updatedAt || "-",
    appVersion: rider.appVersion || "-",
    createdDate: rider.createdAt,
    status: rider.status,
    action: "Update Delete",
  }));

  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <>
      <Paper
        sx={{
          height: 500,
          width: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{
            border: 0,
            fontSize: "16px",
          }}
        />
      </Paper>
    </>
  );
}
