import React from "react";
import ManagerLoginCheck from "./components/admin-components/ManagerLoginCheck";
import ManagerRoom from "./components/admin-components/ManagerRoom";
import ManagerSideBar from "./components/admin-components/ManagerSidebar";

function App() {
  const token = sessionStorage.getItem("token");

  return (
    <div className="App">
      <div>
        <div className="main-interface">
          {token === null ? <ManagerLoginCheck /> : <ManagerSideBar />}
        </div>
      </div>
    </div>
  );
}
export default App;
