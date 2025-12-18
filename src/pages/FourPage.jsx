import { useDispatch, useSelector } from "react-redux";
import { setData, nextStep } from "../States/UserSlice";
import Layout from "../components/Layout";


export default function PageFour() {
const dispatch = useDispatch();
const user = useSelector(s => s.user);
if (user.step !== 4) return null;


const isValid = user.maritalStatus &&
(user.maritalStatus === "single" || user.spouseName);


return (
<Layout>
<h2>Personal Info</h2>
<p>I am {user.gender} of {user.age} years old.</p>


<select value={user.maritalStatus}
onChange={e => dispatch(setData({ maritalStatus: e.target.value }))}>
<option value="">Marital Status</option>
<option value="single">Single</option>
<option value="married">Married</option>
</select>


{user.maritalStatus === "married" && (
<input placeholder="Wife Name" value={user.spouseName}
onChange={e => dispatch(setData({ spouseName: e.target.value }))} />
)}


<button disabled={!isValid} onClick={() => dispatch(nextStep())}>Next</button>
</Layout>
);
}