import Navbar from "./components/Navbar";

import "./styles/index.css";

const App = (props) => {
  return <Navbar submenus={props.submenus} />;
};

export default App;
