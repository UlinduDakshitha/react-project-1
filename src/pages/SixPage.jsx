import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData, nextStep } from "../States/UserSlice";
import { Box, Button, Card, CardContent, Typography, Chip } from "@mui/material";
import MyDetailsHeader from "../components/MyDetailsHeader";
import AddIcon from "@mui/icons-material/Add";
import img1 from "../assets/Group 1429.png";
import img2 from "../assets/Group 1430.png";
import img3 from "../assets/Group 1435.png";
import img4 from "../assets/Group 1436.png";    
import img5 from "../assets/Group 1437.png";
import img6 from "../assets/Group 1438.png";
import img7 from "../assets/Group 1525.png";    

const GOALS = [
  {
    id: 1,
    title: "Health and wellbeing of our family",
    imageUrl: img1,
  },
  {
    id: 2,
    title: "Protect my income",
    imageUrl: img2,
  },
  {
    id: 3,
    title: "My Retirement Saving",
    imageUrl: img3,
  },
  {
    id: 4,
    title: "Save for Ruwan's college",
    imageUrl: img4,
  },
  {
    id: 5,
    title: "Save for Ruwani's college",
    imageUrl: img5,
  },
  {
    id: 6,
    title: "Critical Illness and disability",
    imageUrl: img6,
  },
  {
    id: 7,
    title: "My Kids' Dream Wedding",
    imageUrl: img7,
  },
];

export default function SixPage() {
  const dispatch = useDispatch();
  const user = useSelector(s => s.user);
  const [selectedGoals, setSelectedGoals] = useState([]);

  if (user.step !== 6) return null;

  const toggleGoal = (goalId) => {
    setSelectedGoals(prev =>
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleNext = () => {
    dispatch(setData({ goals: selectedGoals }));
    dispatch(nextStep());
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", minHeight: "80vh" }}>
      <MyDetailsHeader step="6/6" />

      <Box style={{ display: "flex", flexDirection: "column", flex: 1, padding: "40px", overflowY: "auto" }}>
        {/* Title */}
        <h1 style={{ fontSize: "36px", fontWeight: "bold", margin: "20px 0 30px 0" }}>
          What are your main goals in life?
        </h1>

        {/* Tabs and Add Goal Button */}
        <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
          <Box style={{ display: "flex", gap: "15px" }}>
            <Chip label="All goals" variant="filled" style={{ background: "#f0f0f0", cursor: "pointer" }} />
            <Chip label="Goal Timeline" variant="outlined" style={{ cursor: "pointer" }} />
          </Box>
          <Button
            startIcon={<AddIcon />}
            style={{
              textTransform: "none",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#FF6633",
              border: "2px solid #FF6633",
              borderRadius: "20px",
              padding: "8px 15px",
              background: "#fff",
            }}
          >
            Add Goal
          </Button>
        </Box>

        {/* Goals Grid */}
        <Box style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {GOALS.map(goal => (
            <Card
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              style={{
                cursor: "pointer",
                position: "relative",
                height: "200px",
                overflow: "hidden",
                border: selectedGoals.includes(goal.id) ? "3px solid #FF6633" : "none",
                opacity: selectedGoals.includes(goal.id) ? 1 : 0.8,
                transition: "all 0.3s ease",
              }}
            >
              <Box
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${goal.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                }}
              />
              <Box
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0, 0, 0, 0.3)",
                  zIndex: 2,
                }}
              />
              <CardContent
                style={{
                  position: "relative",
                  zIndex: 3,
                  height: "100%",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "20px",
                }}
              >
                <Typography
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "18px",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  {goal.title}
                </Typography>
              </CardContent>

              {/* Checkmark for selected goals */}
              {selectedGoals.includes(goal.id) && (
                <Box
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "30px",
                    height: "30px",
                    background: "#FF6633",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "18px",
                    zIndex: 4,
                  }}
                >
                  ✓
                </Box>
              )}
            </Card>
          ))}
        </Box>

        {/* Next Button */}
        <Box style={{ display: "flex", justifyContent: "flex-end", paddingBottom: "20px" }}>
          <Button
            onClick={handleNext}
            style={{
              padding: "12px 30px",
              fontSize: "16px",
              fontWeight: "bold",
              background: "#FF6633",
              color: "#fff",
              textTransform: "none",
              borderRadius: "25px",
            }}
          >
            Next →
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
