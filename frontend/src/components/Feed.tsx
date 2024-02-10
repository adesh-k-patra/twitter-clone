export default function Feed() {
  return (
    <div className="border-b border-slate-50 px-4 pt-3 pb-1.5 flex">
      <div className="w-10">
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
      <div className="grow">
        <div className="pl-3">
          <div className="flex">
            <div className="text-base font-bold text-white">Anon 2.0</div>
            <div className="pl-1 text-base text-slate-100">@anonthedev</div>
            <div className="px-1 text-slate-100">·</div>
            <div className="text-base text-slate-100">1h</div>
          </div>
          <div className="text-white">
            Being a boy is not easy.. U cant call ur mom and tell her that u are
            missing her.. cz she will get worried.
          </div>
        </div>
        <div className="flex justify-between pt-1.5 pl-1">
          <div className="flex cursor-pointer relative">
            <div className="rounded-full hover:bg-slate-700 w-10 h-10 pt-3 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                width="17"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#71767a"
                  d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"
                />
              </svg>
            </div>
            <div className="text-slate-100 text-sm absolute bottom-2 left-9">
              1
            </div>
          </div>
          <div className="flex cursor-pointer relative">
            <div className="rounded-full hover:bg-slate-800 w-10 h-10 pt-2.5 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="21.36"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#71767a"
                  d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"
                />
              </svg>
            </div>
            <div className="text-slate-100 text-sm absolute bottom-2 left-9">
              2
            </div>
          </div>
          <div className="flex cursor-pointer relative">
            <div className="rounded-full hover:bg-slate-900 w-10 h-10 pt-3 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                width="17"
                viewBox="0 0 512 512"
              >
                <path
                  className="focus-red-50"
                  fill="#71767a"
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
              </svg>
            </div>
            <div className="text-slate-100 text-sm absolute bottom-2 left-9">
              26
            </div>
          </div>
          <div className="flex cursor-pointer relative">
            <div className="rounded-full hover:bg-slate-700 w-10 h-10 pt-3 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                width="17"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#71767a"
                  d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"
                />
              </svg>
            </div>
            <div className="text-slate-100 text-sm absolute bottom-2 left-9">
              2
            </div>
          </div>
          <div className="flex cursor-pointer justify-end">
            <div className="rounded-full hover:bg-slate-700 w-10 h-10 pt-3 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                width="17"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#71767a"
                  d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"
                />
              </svg>
            </div>
            <div className="rounded-full hover:bg-slate-700 w-10 h-10 pt-3 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="17"
                width="17"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#71767a"
                  d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
