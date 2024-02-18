import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import HomeFollowing from "./pages/HomeFollowing"
import ProfileReplies from "./pages/ProfileReplies"
import ProfileHighlights from "./pages/ProfileHighlights"
import ProfileMedia from "./pages/ProfileMedia"
import ProfileLikes from "./pages/ProfileLikes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/following" element={<HomeFollowing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/replies" element={<ProfileReplies />} />
        <Route path="/profile/highlights" element={<ProfileHighlights />} />
        <Route path="/profile/media" element={<ProfileMedia />} />
        <Route path="/profile/likes" element={<ProfileLikes />} />
        <Route path="/settings/profile" element={<ProfileLikes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
