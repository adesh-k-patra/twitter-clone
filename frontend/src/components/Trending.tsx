export default function Trending() {
  return (
    <div className="px-4 py-3 bg-slate-300 hover:bg-slate-400 w-full cursor-pointer grid grid-cols-6">
      <div className="col-span-5">
        <div className="text-slate-100 text-sm">Trending in India</div>
        <div className="mt-0.5 font-bold">#DiyaKumari</div>
        <div className="text-slate-100 text-sm mt-1">65.1K Posts</div>
      </div>
      <div className="col-span-1 pl-6">
        <div className="hover:bg-slate-500 rounded-full w-9 h-9 items-center pt-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path
              fill="#71767a"
              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
