import { Routes, Route } from "react-router";
import App from '../App'
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";


const AllRouter = () => (
  <Routes>
    <Route path="/" element={<Main></Main>}>
      <Route index element={<Home></Home>}></Route>
    </Route>

    {/* <Route path="/" element={<Main />} />  */}
  </Routes >

)

export default AllRouter;
