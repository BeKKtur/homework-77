import Messages from "./components/message/Messages";
import AppToolBar from "./components/appbar/AppToolBar";
import {Route, Routes} from "react-router-dom";
import NewMessage from "./components/message/NewMessage";

function App() {
  return (
    <>
        <header>
            <AppToolBar/>
        </header>
        <main>
            <Routes>
                <Route path='/' element={<Messages/>}/>
                <Route path='send' element={<NewMessage/>}/>
            </Routes>
        </main>

    </>
  )
}

export default App
