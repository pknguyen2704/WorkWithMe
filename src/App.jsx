import Board from "~/pages/Boards/_id"
import Pomodoro from "~/pages/Pomodoro/Pomodoro"
import Workspace from "./pages/Workspace/Workspace"
import { Routes, Route, Navigate } from "react-router-dom"
function App() {

  return (
    <Routes>
      <Route path="/" element={
        <Navigate to="/home" replace={true} />
      }/>
      <Route path="/home" element={<h1>Đây là trang chủ nhưng mà lười nên chưa làm</h1>}/>
      <Route path='/todolist/:boardId'element={<Board/>}/>
      <Route path="/pomodoro" element={<Pomodoro/>}/>
      <Route path="/workspace" element={<Workspace/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>
  )
}

export default App
