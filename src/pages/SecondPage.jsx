import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../States/UserSlice";
import Layout from "../components/Layout";


export default function PageTwo() {
const dispatch = useDispatch();
const step = useSelector(s => s.user.step);
if (step !== 2) return null;


return (
<Layout>
<h2>Second Page</h2>
<button onClick={() => dispatch(nextStep())}>Get Started</button>
</Layout>
);
}