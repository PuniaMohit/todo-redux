import "./header.css";
import * as Icon from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { showPopUp } from '../../actions/index'

const Header = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div>Today</div>
      <Icon.PlusCircle className="icon"
        onClick={() => dispatch(showPopUp())}
      />
    </div>
  );
};

export default Header;
