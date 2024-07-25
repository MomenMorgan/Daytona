import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layouts.";
import Register from "./pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home</p>{" "}
            </Layout>
          }
        />
        <Route
          path="search"
          element={
            <Layout>
              <p>Search</p>{" "}
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
