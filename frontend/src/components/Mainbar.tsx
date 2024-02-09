import Post from "./Post"
import Topbar from "./TopBar"

export default function Mainbar() {
  return (
    <div className="col-span-5 border border-y-0 border-slate-50">
      <Topbar />
      <Post />
    </div>
  )
}
