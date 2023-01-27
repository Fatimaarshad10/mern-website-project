import React ,{useState} from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "../new.css";
import { FilePlus, Image, SignOut } from "phosphor-react";
import { Link  , useNavigate} from "react-router-dom";

import Adminprofile from "../images/medibangpaint.jpg";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
function Topic() {
 const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

    const userLogin = () => {
      console.log("user remove");
      localStorage.removeItem("user");
      navigate('/admin/login')
    };

    return (
      <SideNav id="side-nav" onToggle={(expanded) => {
        setIsVisible(expanded);
      }}
      expanded={isVisible}>
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />

        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="admin">
            <NavIcon>
              <img
                src={Adminprofile}
                alt="admin-profile"
                style={{ fontSize: "1.75em" }}
                className="admin-picture"
              />
            </NavIcon>
            <NavText>Admin</NavText>
          </NavItem>
          <NavItem eventKey="home" >
            <NavIcon>
              <Image style={{ fontSize: "1.75em", color: "#d2abaa" }} />
            </NavIcon>

            <NavText>
              <Link to="/admin/post">Posts </Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="add post" >
            <NavIcon>
              <FilePlus style={{ fontSize: "1.75em", color: "#d2abaa" }} />
            </NavIcon>
            <NavText>
              <Link to="/admin/add"> Add post</Link>
            </NavText>
          </NavItem>
          <NavItem eventKey="logout">
            <NavIcon>
              <SignOut style={{ fontSize: "1.75em", color: "#d2abaa" }} />
            </NavIcon>
            <NavText onClick={userLogin} >
              logout
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
        }

export default Topic

