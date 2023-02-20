import "./App.css";
import { ChatState } from "./context/ChatProvider";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  const { url } = ChatState();
  console.log(url);
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
      }}
      className="App"
    >
      {" "}
      <AllRoutes />
    </div>
  );
}

export default App;
