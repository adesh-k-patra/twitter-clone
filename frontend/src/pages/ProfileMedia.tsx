import LeftSidebar from "../components/LeftSidebar"
import ProfileMainbar from "../components/ProfileMainbar"
import ProfileRightSidebar from "../components/ProfileRightSidebar"

export default function ProfileMedia() {
  return (
    <div className="bg-black grid grid-cols-12">
      <LeftSidebar route="profile"/>
      <ProfileMainbar route="media" />
      <ProfileRightSidebar />
    </div>
  )
}