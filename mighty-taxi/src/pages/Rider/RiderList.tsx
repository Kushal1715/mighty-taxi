import PaginationTable from "@/components/PaginationTable";
import { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FaAddressCard } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

type Props = {};

const RiderList = (props: Props) => {
  const { dark } = useSelector((state: RootState) => state.darkmode);
  const bgColor = dark ? "black" : "white";
  const textColor = dark ? "white" : "black";
  const [riders, setRiders] = useState([]);

  const fetchRiders = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/riders/get-riders"
      );
      const data = await response.json();
      setRiders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRiders();
  }, []);

  console.log(riders);
  return (
    <div>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                backgroundColor: bgColor,
                color: textColor,
              }}
            >
              <h1 className="font-bold text-2xl">Rider List</h1>

              <Stack spacing={2} direction="row">
                <Button variant="contained">Add Rider</Button>
                <Button variant="contained" color="error">
                  Filter Rider
                </Button>
              </Stack>
            </Item>
          </Grid>
        </Grid>
        <PaginationTable riders={riders} />
      </Box>
    </div>
  );
};

export default RiderList;
