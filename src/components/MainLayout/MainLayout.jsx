import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar/Sidebar";
import Topbar from "../common/Topbar/Topbar";
import { Container } from "reactstrap";

const FullLayout = () => {
  return (
    <main>
      {/********header**********/}
      <Topbar />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div className="contentArea">
          {/********Middle Content**********/}
          <Container className="p-4" fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
