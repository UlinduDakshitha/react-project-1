import { useSelector } from "react-redux";
import { Box, Button, TextField, Slider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { useState } from "react";

export default function PageFive() {
  const u = useSelector(s => s.user);
  const [numKids, setNumKids] = useState(2);
  const [kids, setKids] = useState([
    { name: "Ruwan", age: 5 },
    { name: "Ruwani", age: 2 }
  ]);

  if (u.step !== 5) return null;

  const handleKidsChange = (value) => {
    setNumKids(value);
    const newKids = [...kids];
    if (value > kids.length) {
      for (let i = kids.length; i < value; i++) {
        newKids.push({ name: "", age: "" });
      }
    } else {
      newKids.splice(value);
    }
    setKids(newKids);
  };

  const updateKid = (index, field, value) => {
    const newKids = [...kids];
    newKids[index] = { ...newKids[index], [field]: value };
    setKids(newKids);
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "80vh", padding: "40px" }}>
      {/* Header */}
      <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "40px" }}>
        <Button startIcon={<ArrowBackIcon />} style={{ textTransform: "none", color: "#000" }}>
          Back
        </Button>
        <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>My details</h2>
        <Box style={{ fontSize: "14px", color: "#666" }}>5/5</Box>
      </Box>

      {/* User Info */}
      <Box style={{ textAlign: "center", marginBottom: "40px" }}>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          My name is <span style={{ color: "#FF6633", fontWeight: "bold" }}>{u.firstName}</span>
        </p>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          And I am <span style={{ color: "#FF6633", fontWeight: "bold" }}>{u.gender}</span> of{" "}
          <span style={{ color: "#FF6633", fontWeight: "bold" }}>{u.age}</span> years old.
        </p>
        {u.maritalStatus === "married" && (
          <p style={{ fontSize: "18px", margin: "10px 0" }}>
            I am <span style={{ color: "#FF6633", fontWeight: "bold" }}>married</span> to{" "}
            <span style={{ color: "#FF6633", fontWeight: "bold" }}>{u.spouseName}</span>.
          </p>
        )}
      </Box>

      {/* Title */}
      <h1 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center", marginBottom: "30px" }}>
        I have (kids)
      </h1>

      {/* Slider */}
      <Box style={{ width: "100%", maxWidth: "400px", marginBottom: "20px" }}>
        <Slider
          value={numKids}
          onChange={(e, value) => handleKidsChange(value)}
          min={0}
          max={5}
          step={1}
          marks
          valueLabelDisplay="on"
          style={{ color: "#FF6633" }}
        />
      </Box>

      {/* They are */}
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>they are</p>

      {/* Kids List */}
      <Box style={{ width: "100%", maxWidth: "500px", display: "flex", flexDirection: "column", gap: "20px", marginBottom: "30px" }}>
        {kids.map((kid, index) => (
          <Box key={index} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box style={{ flex: 1 }}>
              <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "8px" }}>My kid is</label>
              <TextField
                fullWidth
                placeholder="Name"
                value={kid.name}
                onChange={e => updateKid(index, "name", e.target.value)}
                InputProps={{ startAdornment: <ChildCareIcon style={{ marginRight: "10px", color: "#999" }} /> }}
                style={{ height: "44px" }}
              />
            </Box>
            <Box style={{ width: "150px" }}>
              <label style={{ fontSize: "12px", color: "#666", display: "block", marginBottom: "8px" }}>he/she is</label>
              <Box style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <TextField
                  type="number"
                  value={kid.age}
                  onChange={e => updateKid(index, "age", e.target.value)}
                  style={{ width: "70px", height: "44px" }}
                />
                <span style={{ color: "#999", fontSize: "14px" }}>years old</span>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Next Button */}
      <Button
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          fontSize: "16px",
          fontWeight: "bold",
          background: "#FF6633",
          color: "#fff",
          textTransform: "none",
          borderRadius: "25px"
        }}
      >
        Next →
      </Button>
    </Box>
  );
}