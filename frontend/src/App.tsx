import LeftSidebar from "./components/LeftSidebar"
import Mainbar from "./components/Mainbar"
import RightSidebar from "./components/RightSidebar"

function App() {
  return (
    <div className="bg-black grid grid-cols-12">
      <LeftSidebar />
      <Mainbar />
      <RightSidebar />
    </div>
  )
}

export default App
