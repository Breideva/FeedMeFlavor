import CategoryButtons from "../components/CategoryButtons";
import Header from "../components/Header";
import MainButtons from "../components/MainButtons";
import Popular from "../components/Popular";
import Regions from "../components/Regions";

export default function Home() {
  return (
    <div>
      <Header />
      <Popular />
      <Regions />
      <CategoryButtons />
      <MainButtons />
    </div>
  );
}
