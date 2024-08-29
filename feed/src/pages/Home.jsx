import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Popular from "../components/Popular";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
        <NavBar />
        <Header />
        <Popular />
    </div>
  );
}
