import Follow from "./Follow"
import SearchBar from "./SearchBar"
import Trending from "./Trending"

export default function HomeRightSidebar() {
  return (
    <div className="col-span-4 bg-black text-white pl-8">
      <SearchBar />

      <div className="bg-slate-300 mt-16 w-96 pl-4 py-3 rounded-2xl">
        <div className="text-xl font-black">Subscribe to Premium</div>
        <div className="mt-2 text-base font-normal pr-10">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </div>
        <button className="bg-blue-50 text-base font-bold hover:bg-blue-100 py-2 w-32 rounded-3xl flex justify-center mt-2">
          Subscribe
        </button>
      </div>

      <div className="bg-slate-300 mt-5 w-96 rounded-2xl">
        <div className="text-xl font-black px-4 py-3">What's happening</div>
        <Trending />
        <Trending />
        <Trending />
        <Trending />
        <div className="p-4 text-slate-50 hover:bg-slate-400 cursor-pointer">
          Show More
        </div>
      </div>

      <div className="bg-slate-300 mt-5 w-96 rounded-2xl">
        <div className="text-xl font-black px-4 py-3">Whom to follow</div>
        <Follow />
        <Follow />
        <Follow />
        <div className="p-4 text-slate-50 hover:bg-slate-400 cursor-pointer">
          Show More
        </div>
      </div>

      <div className="mt-5 w-96 flex justify-start text-slate-200 text-sm px-4">
        <div className="pr-4 hover:underline hover:decoration-slate-200 hover:cursor-pointer">
          Terms of Service
        </div>
        <div className="pr-4 hover:underline hover:decoration-slate-200 hover:cursor-pointer">
          Privacy Policy
        </div>
        <div className="pr-4 hover:underline hover:decoration-slate-200 hover:cursor-pointer">
          Cookie Policy
        </div>
      </div>

      <div className="w-96 mb-32 flex justify-start text-slate-200 text-sm px-4">
        <div className="pr-4 hover:underline hover:decoration-slate-200 hover:cursor-pointer">
          Accessibilty
        </div>
        <div className="pr-4 hover:underline hover:decoration-slate-200 hover:cursor-pointer">
          Ads Info
        </div>
        <div className="pr-4 hover:underline hover:decoration-slate-200 hover:cursor-pointer">
          More ...
        </div>
        <div className="pr-4 hover:underline hover:decoration-slate-200 hover:cursor-pointer">
          @ 2024 X Corp.
        </div>
      </div>
    </div>
  )
}
