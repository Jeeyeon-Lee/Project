import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./routes/home"
import Profile from "./routes/profile"
import CreateAccount from "./routes/create-account"
import Login from "./routes/login"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const router = createBrowserRouter([
  {
    path:"/",
    element : <Layout />,
    children: [
      {
        path:"",
        element: <Home />,
      },
      {
        path:"profile",
        element: <Profile />,
      }
    ]
  },
  // 로그인, 크리에잇은 레이아웃을 벗어난 곳에 배치함. 
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/create-account",
    element: <CreateAccount />,
  }
])

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box
  }
  body{
    background-color: black
    color:white
    font-family: system-ui, -apple-system, BlickMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',sans-serif; 
  }
`;


function App() {
  return (
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
  )
}

export default App
