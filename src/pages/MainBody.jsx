//MainBody.jsx

import { Outlet } from "react-router-dom";
import NavButtons from "../components/NavButtons";


function MainBody() {
  return (
    <div>
      <NavButtons />
      <Outlet />
    </div>
  );
}

export default MainBody;
