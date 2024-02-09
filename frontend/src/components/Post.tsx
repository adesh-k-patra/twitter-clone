export default function Post() {
  return (
    <div className="h-56 pt-14 border-b border-slate-50 text-white px-4 pb-3 flex">
      <div className="mt-3 w-10">
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
      <div className="mt-3 w-full">
        <div className="">
          <textarea
            className="bg-black text-white text-xl border-0 w-full h-24 focus:outline-none placeholder:text-slate-100 pl-3 py-1 resize-none scrollbar-thin scrollbar-track-black scrollbar-thumb-slate-600"
            placeholder="What is happening?!"
          ></textarea>
        </div>
        <div className="row-span-1 border-t border-slate-50 flex">
          <div className="flex justify-start py-2.5">
            <div className="flex justify-center hover:bg-slate-600 h-8 w-8 rounded-full pt-2 ml-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#1d9bf0"
                  d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                />
              </svg>
            </div>
            <div className="flex justify-center hover:bg-slate-600 h-8 w-8 rounded-full pt-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#1d9bf0"
                  d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                />
              </svg>
            </div>
            <div className="flex justify-center hover:bg-slate-600 h-8 w-8 rounded-full pt-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#1d9bf0"
                  d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"
                />
              </svg>
            </div>
          </div>
          <div className="flex grow justify-end">
            <button className="bg-blue-50 text-base font-bold hover:bg-blue-100 rounded-3xl flex justify-center my-auto w-16 h-9 pt-1.5 mr-1">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
