export default function Follow() {
  return (
    <div className="px-4 py-3 bg-slate-300 hover:bg-slate-400 w-full cursor-pointer grid grid-cols-4">
      <div className="col-span-3 flex justify-start">
        <div className="my-auto ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ccd6dd"
              d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
            />
          </svg>
        </div>
        <div className="grid grid-rows-2 pl-3">
          <div className="text-base flex justify-start font-bold">
            Adesh Kumar Patra
          </div>
          <div className="text-base text-slate-100 flex justify-start">
            @adeshkpatra
          </div>
        </div>
      </div>
      <div className="col-span-1 my-auto mx-1.5">
        <button className="bg-white text-black w-full h-8 rounded-full text-sm font-semibold">
          Follow
        </button>
      </div>
    </div>
  )
}
