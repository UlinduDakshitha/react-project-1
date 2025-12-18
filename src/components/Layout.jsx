import AppNavbar from "./Navbar";
import Footer from "./Footer";


export default function Layout({ children }) {
return (
<div style={{ minHeight: "100vh", background: "#f4f4f4" }}>
<AppNavbar />
<main style={{ padding: 30 }}>{children}</main>
<Footer />
</div>
);
}