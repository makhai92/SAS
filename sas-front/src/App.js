import "./default.css"; //기본 색, 폰트 변수
import { Route, Routes } from "react-router-dom";
import LoginMain from "./components/user/LoginMain";
import Main from "./components/main/Main";
import Join from "./components/user/Join";

import UserMain from "./components/user/UserMain";
import OwnerStatistics from "./components/ownerstatistics/OwnerStatistics";
import AdminMain from "./components/admin/AdminMain";
import MenuView from "./components/menu/MenuView";
import StoreRegist from "./components/store/StoreRegist";
import StoreMain from "./components/store/StoreMain";
import ManageReserved from "./components/store/ManageReserved";
import ManageReview from "./components/store/ManageReview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        {/* 확인용-수진;user 메인 생기면 옮기겠슴다 */}
        {/* 답변: ㅇㅋ */}
        <Route path="/join" element={<Join />} />
        <Route path="/login/*" element={<LoginMain />} />
        <Route path="/storemain" element={<StoreMain />} />
        <Route
          path="/storemain/ownerstatistics"
          element={<OwnerStatistics />}
        />
        <Route path="/storemain/managereview" element={<ManageReview />} />
        <Route path="/storemain/managereserved" element={<ManageReserved />} />
        <Route path="/usermain" element={<UserMain />} />
        <Route path="/admin/*" element={<AdminMain />} />
        <Route path="/menuview" element={<MenuView />} />
        <Route path="/storeRegist" element={<StoreRegist />} />
      </Routes>
    </div>
  );
}

export default App;
