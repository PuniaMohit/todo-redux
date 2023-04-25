import "./header.css";
import * as Icon from "react-bootstrap-icons";

const Header = (props) => {
  const { setShowPopUp } = props;
  return (
    <div className="header">
      <div>Today</div>
      <Icon.PlusCircle className="icon" onClick={() => setShowPopUp(true)} />
    </div>
  );
};

export default Header;
