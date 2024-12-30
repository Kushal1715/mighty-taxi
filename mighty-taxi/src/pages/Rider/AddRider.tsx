import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BackButton from "@/components/BackButton";
import { Divider } from "@mui/material";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";

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

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  contactNumber: string;
  gender: string;
  address: string;
  profileImage: string | File; // Allow both string and File types
  status: string;
}

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  password: "",
  contactNumber: "",
  gender: "Male",
  address: "",
  profileImage: "",
  status: "",
};

export default function AddRider() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormValues({ ...formValues, profileImage: file });
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput")?.click();
  };

  console.log(formValues);
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(); // Create a new FormData object

    // Append text fields to FormData
    formData.append("firstName", formValues.firstName);
    formData.append("lastName", formValues.lastName);
    formData.append("email", formValues.email);
    formData.append("username", formValues.username);
    formData.append("password", formValues.password);
    formData.append("contactNumber", formValues.contactNumber);
    formData.append("gender", formValues.gender);
    formData.append("address", formValues.address);
    formData.append("status", formValues.status);

    // Append image file to FormData if it exists
    if (formValues.profileImage) {
      formData.append("profileImage", formValues.profileImage);
    }

    try {
      const result = await fetch("http://localhost:3000/api/riders/add-rider", {
        method: "POST",
        body: formData, // Use FormData in the body
      });
      const data = await result.json();
      console.log(data); // Handle response data
    } catch (e) {
      console.log(e); // Handle errors
    }
  };

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
      <form>
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
                    src={
                      typeof formValues.profileImage === "string"
                        ? formValues.profileImage
                        : URL.createObjectURL(formValues.profileImage)
                    }
                    className="w-24 h-24 border-1 rounded-full"
                  />
                  <div
                    className="absolute right-[-16px] bottom-[-5px] cursor-pointer"
                    onClick={triggerFileInput}
                  >
                    <MdOutlineEdit className="bg-blue-500 text-white rounded-full p-1 w-6 h-6" />
                    <input
                      type="file"
                      id="fileInput"
                      accept=".png, .jpg, .jpeg, .gif"
                      className="hidden"
                      onChange={handleFileChange}
                    />
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
                      <input
                        type="radio"
                        name="status"
                        value="Active"
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            status: e.target.value,
                          })
                        }
                        checked={formValues.status === "Active"}
                      />
                      Active
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="status"
                        value="Pending"
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            status: e.target.value,
                          })
                        }
                        checked={formValues.status === "Pending"}
                      />
                      Pending
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="status"
                        value="Inactive"
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            status: e.target.value,
                          })
                        }
                        checked={formValues.status === "Inactive"}
                      />
                      Inactive
                    </label>
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="status"
                        value="Banned"
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            status: e.target.value,
                          })
                        }
                        checked={formValues.status === "Banned"}
                      />
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
                      value={formValues.firstName}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          firstName: e.target.value,
                        });
                      }}
                      placeholder="First Name"
                      className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[440px] "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-left mb-1 text-lg">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[440px] "
                      value={formValues.lastName}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          lastName: e.target.value,
                        });
                      }}
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
                      className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[440px] "
                      value={formValues.email}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          email: e.target.value,
                        });
                      }}
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
                      className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[440px] "
                      value={formValues.username}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          username: e.target.value,
                        });
                      }}
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
                      className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[440px] "
                      value={formValues.password}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-left mb-1 text-lg">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contact Number"
                      className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[440px] "
                      value={formValues.contactNumber}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          contactNumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between mb-2 items-center">
                  <div className="flex flex-col">
                    <label className="text-left mb-1 text-lg">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[440px] "
                      value={formValues.gender}
                      onChange={(e) =>
                        setFormValues({ ...formValues, gender: e.target.value })
                      }
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-left mb-1 text-lg">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="border-2 bg-[#f7f9ff] p-2 rounded-lg min-w-[440px] "
                      value={formValues.address}
                      onChange={(e) => {
                        setFormValues({
                          ...formValues,
                          address: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <button
                    className="p-2 bg-green-500 rounded-lg text-white px-4"
                    onClick={handleFormSubmit}
                  >
                    Save
                  </button>
                </div>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
