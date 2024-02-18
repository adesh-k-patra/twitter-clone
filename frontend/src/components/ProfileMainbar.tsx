import { useNavigate } from "react-router-dom"
import Feed from "./Feed"

export default function ProfileMainbar({route}:{route: string}) {
  const navigate = useNavigate()
  return (
    <div className="col-span-5 border border-y-0 border-slate-50">
      <div className="h-14 border-slate-50 bg-black fixed w-5/12 mr-12 border-r text-white pl-2 flex z-10">
        <div className="w-12 my-auto">
          <div className="hover:bg-gray-50 w-10 h-10 rounded-full grid place-content-center mt-0.5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="17.14"
              width="15"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
          </div>
        </div>
        <div className="grow pl-2">
          <div className="text-xl text-white font-bold pt-1">
            Adesh Kumar Patra
          </div>
          <div className="text-slate-100 text-sm">6 posts</div>
        </div>
      </div>

      <div className="h-56 pt-14 bg-amber-400"></div>
      <div className="px-4 pt-3 relative">
        <div className="absolute bg-orange-400 w-32 h-32 rounded-full bottom-44"></div>
        <div className="h-20 flex justify-end">
          <button className="w-28 h-9 text-sm text-white font-semibold rounded-full border border-slate-300 px-4 bg-black hover:bg-gray-50">
            Edit Profile
          </button>
        </div>

        <div className="text-xl text-white font-bold">Adesh Kumar Patra</div>

        <div className="text-slate-100">@adeshkpatra</div>

        <div className="text-white py-3">CP | DSA | WebDev FullStack</div>

        <div className="flex my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="12"
            viewBox="0 0 384 512"
          >
            <path
              fill="#71767a"
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            />
          </svg>
          <div className="text-slate-100 pl-2 pr-4 leading-4">
            Bhubaneshwar, Odisha
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path
              fill="#71767a"
              d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
            />
          </svg>
          <div className="text-slate-100 pl-2 leading-4">Joined July 2021</div>
        </div>

        <div className="flex py-3 text-sm">
          <div className="hover:underline hover:decoration-white flex cursor-pointer">
            <div className="text-white font-semibold">10</div>
            <div className="text-slate-100 pl-0.5">Following</div>
          </div>
          <div className="ml-4 hover:underline hover:decoration-white flex cursor-pointer">
            <div className="text-white font-semibold">4</div>
            <div className="text-slate-100 pl-0.5">Followers</div>
          </div>
        </div>
      </div>

      <div className="h-14 flex border-b border-slate-50">
        <div className="w-28 px-1 flex justify-center hover:bg-slate-50 cursor-pointer" onClick={()=>{
            navigate("/profile")
          }}>
          <div className={`py-4 px-0.5 font-semibold ${route ==="posts" ? "text-white border-b-4 border-slate-100" : "text-slate-100"}`}>
            Posts
          </div>
        </div>
        <div className="w-32 flex justify-center hover:bg-slate-50 cursor-pointer" onClick={()=>{
            navigate("/profile/replies")
          }}>
          <div className={`py-4 px-0.5 font-semibold ${route ==="replies" ? "text-white border-b-4 border-slate-100" : "text-slate-100"}`}>
            Replies
          </div>
        </div>
        <div className="w-32 flex justify-center hover:bg-slate-50 cursor-pointer" onClick={()=>{
            navigate("/profile/highlights")
          }}>
          <div className={`py-4 px-0.5 font-semibold ${route ==="highlights" ? "text-white border-b-4 border-slate-100" : "text-slate-100"}`}>
            Highlights
          </div>
        </div>
        <div className="w-28 flex justify-center hover:bg-slate-50 cursor-pointer" onClick={()=>{
            navigate("/profile/media")
          }}>
          <div className={`py-4 px-0.5 font-semibold ${route ==="media" ? "text-white border-b-4 border-slate-100" : "text-slate-100"}`}>
            Media
          </div>
        </div>
        <div className="w-28 flex justify-center hover:bg-slate-50 cursor-pointer" onClick={()=>{
            navigate("/profile/likes")
          }}>
          <div className={`py-4 px-0.5 font-semibold ${route ==="likes" ? "text-white border-b-4 border-slate-100" : "text-slate-100"}`}>
            Likes
          </div>
        </div>
      </div>

      <Feed />
      <Feed />
      <Feed />
      <Feed />
    </div>
  )
}
