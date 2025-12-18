import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../States/UserSlice";
import Layout from "../components/Layout";


export default function PageOne() {
const dispatch = useDispatch();
const step = useSelector(s => s.user.step);
if (step !== 1) return null;


return (
<Layout>
<h2>First Page</h2>
<button onClick={() => dispatch(nextStep())}>Get Started</button>
</Layout>
);
}