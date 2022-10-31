import { React, useState } from "react";
import { toast } from "react-toastify";
import ManagerHeader from "./ManagerHeader";
import ManagerLogin from "./ManagerLogin";
import Sidebar from "./ManagerSidebar";

const ManagerLoginCheck = (props) => {
  const [logged, setLogged] = useState(props.logged);

  return (
    <div>
      {logged ? (
        <Sidebar setLogged={setLogged} />
      ) : (
        <ManagerLogin setLogged={setLogged} />
      )}
    </div>
  );
};

export default ManagerLoginCheck;
