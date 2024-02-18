import LeftSidebar from "../components/LeftSidebar"
import ProfileMainbar from "../components/ProfileMainbar"
import ProfileRightSidebar from "../components/ProfileRightSidebar"

export default function ProfileReplies() {
  return (
    <div className="bg-black grid grid-cols-12">
      <LeftSidebar route="profile"/>
      <ProfileMainbar route="replies" />
      <ProfileRightSidebar />
    </div>
  )
}