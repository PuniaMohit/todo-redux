import * as Icon from "react-bootstrap-icons";
import "./header.css";

const Header = ({ setShowPopUp }) => {
  return (
    <div className="header">
      <div>Today</div>
      <Icon.PlusCircle className="icon" onClick={() => setShowPopUp(true)} />
    </div>
  );
};

export default Header;
