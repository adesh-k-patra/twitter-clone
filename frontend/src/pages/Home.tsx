import LeftSidebar from "../components/LeftSidebar"
import Mainbar from "../components/Mainbar"
import RightSidebar from "../components/RightSidebar"

export default function Home() {
  return (
    <div className="bg-black grid grid-cols-12">
      <LeftSidebar />
      <Mainbar />
      <RightSidebar />
    </div>
  )
}
