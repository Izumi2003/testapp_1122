import React from 'react'
// import slideImg1 from './1.JPG';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet
// } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h1>新規登録ページ</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Register;


//ページを作る
// function Dashboard() {
//   return (
//     <h1>Dashboard</h1>
//   )
// }
// function NotMatch() {
//   return (
//     <h1>NotMatch</h1>
//   )
// }

// //ナビゲーションを作る（リンク貼り付け）
// function Navigation() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/weather">Weather</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><Link to="/notmatch">NotMatch</Link></li>
//         </ul>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }

// function Hed() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigation />}>
//           <Route index element={<Home />} />
//           <Route path="weather" element={<Weather />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="*" element={<NotMatch />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

