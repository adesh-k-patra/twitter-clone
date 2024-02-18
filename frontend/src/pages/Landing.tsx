import { useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate()
  return (
    <div className="bg-black h-screen">
      <div className="grid grid-cols-2">
        <div className="col-span-1 pt-44 pl-48">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="370"
            width="370"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ffffff"
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            />
          </svg>
        </div>

        <div className="col-span-1 pt-28 pl-20">
          <div className="text-white text-7xl font-black">Happening Now</div>
          <div className="text-white text-3xl font-bold pt-12 pb-8">
            Join today.
          </div>
          <button className="text-black bg-white rounded-full w-72 h-9 flex justify-center text-sm">
            <div className="pr-2 my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </div>
            <div className="my-auto">Sign up with Google</div>
          </button>

          <button className="text-black bg-white mt-2 rounded-full w-72 h-9 flex justify-center text-sm font-bold">
            <div className="pr-2 my-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="15"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#000000"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                />
              </svg>
            </div>
            <div className="my-auto">Sign up with Apple</div>
          </button>

          <div className="my-3 flex">
            <hr className="w-32 mt-3 border-slate-50"></hr>
            <span className="text-white my-auto px-2">or</span>
            <hr className="w-32 mt-3 border-slate-50"></hr>
          </div>

          <button className="text-white bg-blue-50 hover:bg-blue-100 rounded-full w-72 h-10 flex justify-center text-sm font-bold" onClick={()=>{
            navigate("/signup")
          }}>
            <div className="my-auto">Create Account</div>
          </button>

          <div className="text-xs w-72 mt-2.5 text-slate-100">
            By signing up, you agree to the{" "}
            <span className="text-slate-300 hover:underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-slate-300 hover:underline cursor-pointer">
              Privacy Policy
            </span>
            , including{" "}
            <span className="text-slate-300 hover:underline cursor-pointer">
              Cookie Use.
            </span>
          </div>

          <div className="text-white font-bold mt-14 text-lg">
            Already have an account?
          </div>

          <button
            className="mt-4 text-slate-300 bg-black hover:bg-slate-600 rounded-full w-72 h-10 border border-slate-300 flex justify-center text-sm font-bold"
            onClick={() => {
              navigate("/login")
            }}
          >
            <div className="my-auto">Sign in</div>
          </button>
        </div>
      </div>

      <div className="flex text-sm text-slate-100 justify-evenly mt-20">
        <div className="hover:underline cursor-pointer">About</div>
        <div className="hover:underline cursor-pointer">Download the X App</div>
        <div className="hover:underline cursor-pointer">Help Center</div>
        <div className="hover:underline cursor-pointer">Terms of Service</div>
        <div className="hover:underline cursor-pointer">Privacy Policy</div>
        <div className="hover:underline cursor-pointer">Cookie Policy</div>
        <div className="hover:underline cursor-pointer">Accessibility</div>
        <div className="hover:underline cursor-pointer">Ads Info</div>
        <div className="hover:underline cursor-pointer">Blog</div>
        <div className="hover:underline cursor-pointer">Status</div>
        <div className="hover:underline cursor-pointer">Careers</div>
        <div className="hover:underline cursor-pointer">Brand Resources</div>
        <div className="hover:underline cursor-pointer">Advertising</div>
        <div className="hover:underline cursor-pointer">Marketing</div>
        <div className="hover:underline cursor-pointer">X for Business</div>
        <div className="hover:underline cursor-pointer">Developers</div>
      </div>

      <div className="flex text-sm text-slate-100 justify-center mt-1.5">
        <div className="hover:underline cursor-pointer px-3">Directory</div>
        <div className="hover:underline cursor-pointer px-3">Settings</div>
        <div className="hover:underline cursor-pointer px-3">
          @ 2024 X Corp.
        </div>
      </div>
    </div>
  )
}
