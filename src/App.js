import RoutesApp from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RoutesApp/>
    </div>
  );
}

export default App;
