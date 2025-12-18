import { useDispatch, useSelector } from "react-redux";
import { setData, nextStep } from "../States/UserSlice";
import Layout from "../components/Layout";


export default function PageThree() {
const dispatch = useDispatch();
const user = useSelector(s => s.user);
if (user.step !== 3) return null;


const isValid = user.firstName && user.lastName && user.dob;


const handleNext = () => {
const birthYear = new Date(user.dob).getFullYear();
const age = new Date().getFullYear() - birthYear;
const gender = user.firstName.toLowerCase().endsWith("a") ? "female" : "male";


dispatch(setData({ age, gender }));
dispatch(nextStep());
};


return (
<Layout>
<h2>Enter Details</h2>


<input placeholder="First Name" value={user.firstName}
onChange={e => dispatch(setData({ firstName: e.target.value }))} />


<input placeholder="Last Name" value={user.lastName}
onChange={e => dispatch(setData({ lastName: e.target.value }))} />


<input type="date" value={user.dob}
onChange={e => dispatch(setData({ dob: e.target.value }))} />


<button disabled={!isValid} onClick={handleNext}>Next</button>
</Layout>
);
}