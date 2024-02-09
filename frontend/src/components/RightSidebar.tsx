import Follow from "./Follow"
import Trending from "./Trending"

export default function RightSidebar() {
  return (
    <div className="col-span-4 bg-black text-white pl-8">
      <div className="bg-black fixed py-1">
        <div className="flex justify-start bg-slate-100 focus-within:bg-black h-12 w-96 rounded-full focus-within:border-blue-400 focus-within:border-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="17"
            width="17"
            className="my-auto ml-6 mr-4"
            viewBox="0 0 512 512"
          >
            <path
              fill="#757575"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
          <input
            type="text"
            className="bg-slate-100 focus:bg-black text-white placeholder:text-slate-200 w-64 focus:border-none focus:border-0 focus:outline-0"
            placeholder="Search"
          ></input>
        </div>
      </div>
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
