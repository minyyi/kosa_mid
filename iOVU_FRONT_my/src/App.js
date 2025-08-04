import { Container, Typography } from "@mui/material";
import "./App.css";
import Button from "./component/common/CommonButton";
import Layout from "./component/layout/Layout";
import CommonTitle from "./component/common/CommonTitle";
import Router from "./routes/router";

function App() {
  return (
    <div className="App" style={{}}>
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
