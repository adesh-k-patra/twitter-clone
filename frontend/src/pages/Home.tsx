import LeftSidebar from "../components/LeftSidebar"
import HomeMainbar from "../components/HomeMainbar"
import HomeRightSidebar from "../components/HomeRightSidebar"

export default function Home() {
  return (
    <div className="bg-black grid grid-cols-12">
      <LeftSidebar />
      <HomeMainbar />
      <HomeRightSidebar />
    </div>
  )
}
