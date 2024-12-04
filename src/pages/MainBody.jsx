//MainBody.jsx

import { Outlet } from "react-router-dom";
import Buttons from "../components/Buttons";


function MainBody() {
  return (
    <div>
      <Buttons />
      <Outlet />
    </div>
  );
}

export default MainBody;
