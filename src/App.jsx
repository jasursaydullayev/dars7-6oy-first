import { createBrowserRouter, RouterProvider } from "react-router-dom"
// Layout
import RootLayout from "./layout/RootLayout"
// Pages
import Home from './pages/Home'
import TestPage from './pages/TestPage'
function App() {
  const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/test',
        element: <TestPage />
      }
    ]
  }
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App