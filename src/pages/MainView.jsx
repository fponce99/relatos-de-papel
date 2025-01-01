import { Header } from "../components/Header";
import { ContentResult } from "../components/ContentResult";
import { Cart } from "../components/Cart";
import "../styles/MainView.css";

function MainView() {
  return (
    <>
      <Header />
      <div className="content-container">
        <ContentResult />
        <Cart />
      </div>
    </>
  );
}

export default MainView;
