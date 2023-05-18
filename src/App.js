import AppRouter from "./shared/components/AppRouter";
import Sidebar from "./components/navigation/SidebarAdmin";
import TableDataOne from "./components/tableData/TableDataOne";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from "./auth/screens/LoginScreen";

function App() {
  return (
    <div style={{ display: "flex", width: '50%' }}>
      <div style={{ flex: 1 }}>
        <Sidebar/>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <TableDataOne/>
      </div>
      {/* <LoginScreen/> */}
     
    </div>
  );
}

export default App;
