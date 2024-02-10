export default function LeftSidebar() {
  return (
    <div className="col-span-3 h-full text-white">
      <div className="hover:bg-slate-50 cursor-pointer ml-20 pt-3 rounded-full w-14 h-14 flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          width="32"
          viewBox="0 0 512 512"
        >
          <path
            fill="#ffffff"
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          />
        </svg>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl cursor-pointer hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 576 512"
            >
              <path
                fill="#ffffff"
                d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              />
            </svg>
          </span>
          <div className="pl-5">Home</div>
        </button>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl cursor-pointer hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </span>
          <span className="pl-5">Explore</span>
        </button>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl cursor-pointer hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
              />
            </svg>
          </span>
          <span className="pl-5">Notifications</span>
        </button>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl cursor-pointer hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
          </span>
          <span className="pl-5">Messages</span>
        </button>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl cursor-pointer hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 640 512"
            >
              <path
                fill="#ffffff"
                d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"
              />
            </svg>
          </span>
          <span className="pl-5">Grok</span>
        </button>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl cursor-pointer hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 576 512"
            >
              <path
                fill="#ffffff"
                d="M0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM128 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-128a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-248c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H448c13.3 0 24-10.7 24-24s-10.7-24-24-24H224z"
              />
            </svg>
          </span>
          <span className="pl-5">Lists</span>
        </button>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl cursor-pointer hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ffffff"
                d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
              />
            </svg>
          </span>
          <span className="pl-5">Bookmarks</span>
        </button>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl cursor-pointer hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 640 512"
            >
              <path
                fill="#ffffff"
                d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
              />
            </svg>
          </span>
          <span className="pl-5">Communities</span>
        </button>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl cursor-pointer hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              />
            </svg>
          </span>
          <span className="pl-5">Premium</span>
        </button>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl cursor-pointer hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z"
              />
            </svg>
          </span>
          <span className="pl-5">Profile</span>
        </button>
      </div>
      <div className="pl-20 my-0.5">
        <button className="text-xl hover:bg-slate-50 py-2.5 pl-3 pr-10 rounded-3xl flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"
              />
            </svg>
          </span>
          <span className="pl-5">More</span>
        </button>
      </div>
      <div className="pl-20 my-5">
        <button className="bg-blue-50 text-xl hover:bg-blue-100 py-3 w-60 rounded-3xl flex justify-center font-bold">
          Post
        </button>
      </div>
      <div className="pl-20 mt-7 mb-3 text-center place-items-center">
        <button className="hover:bg-slate-50 pt-3.5 pb-3.5 w-64 rounded-full grid grid-cols-7">
          <span className="flex justify-start col-span-6">
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
          </span>
          <div className="flex justify-end col-span-1 m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
