import { useNavigate, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import { SearchBar } from "./SearchBar";
import { CgProfile } from "react-icons/cg";
import "../styles/Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const shouldHideSearchBar = location.pathname === "/";

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="Header">
      <Image
        src="src/assets/logo.png"
        onClick={goToHome}
        alt="logo"
        width={"100px"}
      />
      {shouldHideSearchBar && <SearchBar />}
      <CgProfile className="profile-icon" />
    </div>
  );
};
