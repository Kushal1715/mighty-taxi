import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FaArrowLeft } from "react-icons/fa";
import BackButton from "@/components/BackButton";
import { Divider } from "@mui/material";
import { MdOutlineEdit } from "react-icons/md";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function AddRider() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="flex-end"
        marginBottom="16px"
      >
        <Grid item xs={1.1}>
          <BackButton route="/rider-list" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Item sx={{ borderRadius: 3, p: 0 }}>
            <Box sx={{ p: 2 }}>
              <h1 className="text-left text-black font-bold text-xl">
                Add Rider
              </h1>
            </Box>
            <Box sx={{ border: 1, borderColor: "#bab3a8" }} />
            <Box sx={{ p: 2, pb: 1, placeItems: "center" }}>
              <div className="relative mb-3">
                <img
                  src="/profile.jpg"
                  className="w-24 h-24 border-1 rounded-full"
                />
                <div className="absolute right-[-16px] bottom-[-5px] cursor-pointer">
                  <MdOutlineEdit className="bg-blue-500 text-white rounded-full p-1 w-6 h-6" />
                </div>
              </div>
              <p>
                Only{" "}
                <span className="text-blue-500">.png .jpg .jpeg .gif </span>
                Allowed
              </p>
            </Box>
            <Divider />
            <Box sx={{ px: 2, py: 2, pt: 1, placeItems: "" }}>
              <div className="">
                <h2 className="mb-2 text-left">Status</h2>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="status" />
                    Active
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="status" />
                    Pending
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="status" />
                    Inactive
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="status" />
                    Banned
                  </label>
                </div>
              </div>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item sx={{ borderRadius: 3, p: 0 }}>
            <Box sx={{ p: 2 }}>
              <h1 className="text-left text-black font-bold text-xl">
                Add Rider Information
              </h1>
            </Box>
            <Box sx={{ border: 1, borderColor: "#bab3a8" }} />
            <Box sx={{ p: 2, placeItems: "" }}>
              <div className="flex justify-between mb-2 items-center">
                <div className="flex flex-col">
                  <label className="text-left mb-1 text-lg">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[300px] "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-left mb-1 text-lg">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[300px] "
                  />
                </div>
              </div>
              <div className="flex justify-between mb-2 items-center">
                <div className="flex flex-col">
                  <label className="text-left mb-1 text-lg">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[300px] "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-left mb-1 text-lg">
                    Username
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[300px] "
                  />
                </div>
              </div>
              <div className="flex justify-between mb-2 items-center">
                <div className="flex flex-col">
                  <label className="text-left mb-1 text-lg">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[300px] "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-left mb-1 text-lg">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[300px] "
                  />
                </div>
              </div>
              <div className="flex justify-between mb-2 items-center">
                <div className="flex flex-col">
                  <label className="text-left mb-1 text-lg">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[300px] ">
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="Option 2">Others</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-left mb-1 text-lg">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[300px] "
                  />
                </div>
              </div>
              <div className="text-right">
                <button className="p-2 bg-green-500 rounded-lg text-white px-4">
                  Save
                </button>
              </div>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
