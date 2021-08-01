import Parcel from "single-spa-react/parcel";

import Layout from "./layouts/Layout";
import TaskForm from "./components/TaskForm";

import "./styles/index.css";

const App = () => {
  return (
    <Layout>
      <h1>Tasks</h1>
      <TaskForm />
      <Parcel config={() => System.import("@uportal/table")} />
    </Layout>
  );
};

export default App;
