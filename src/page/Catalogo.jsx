import { Navbar } from "../components/Navbar";
import { Cards } from "../components/catalogo/Cards";
import { Search } from "../components/catalogo/Search";

export const Catalogo = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <Navbar />
        <Search />
      </div>
    </>
  );
};
