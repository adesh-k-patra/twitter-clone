import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Signup() {
  const navigate = useNavigate()
  const nameRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const dateRef = useRef<HTMLInputElement>(null)
  const monthRef = useRef<HTMLInputElement>(null)
  const yearRef = useRef<HTMLInputElement>(null)

  async function handleSignUp () {
    const date = dateRef.current?.value || ''
    const month = monthRef.current?.value || ''
    const year = yearRef.current?.value || '' 
    const dob = date + month + year;
    const months: string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"] 
    const presentdate: Date = new Date()
    const presentMonth = months[presentdate.getMonth()]
    const formattedDate = presentMonth+" "+presentdate.getFullYear()

    try {
      const response = await axios.post("http://localhost:8787/signup" , {
        name : nameRef.current?.value,
        username : usernameRef.current?.value,
        email : emailRef.current?.value,
        password : passwordRef.current?.value,
        dob : dob,
        date : formattedDate
      })
      const token = response.data.token
      localStorage.setItem("token",token)
      navigate('/home')
    } catch (error) {
      alert("Username/email already taken")
    }
  }


  return (
    <div className="h-screen bg-gray-50 py-16 flex justify-center">
      <div className="bg-black w-2/5 h-full rounded-2xl">
        <div className="h-16 flex pt-2 pl-2">
          <div>
            <div className="hover:bg-gray-50 rounded-full w-9 h-9 flex justify-center pt-2.5 cursor-pointer" onClick={()=>{
              navigate("/")
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#ffffff"
                  d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                />
              </svg>
            </div>
          </div>
          <div className="grow px-56">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="35"
              width="35"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              />
            </svg>
          </div>
        </div>

        <div className="px-20">
          <div className="text-white text-3xl font-extrabold pt-3">
            Create your account
          </div>

          <input
            className="mt-5 border focus:border-2 border-slate-50 rounded-md bg-black w-full h-12 text-lg text-white px-2 outline-0 focus:border-slate-100 placeholder:text-slate-100"
            placeholder="Name"
            ref={nameRef}
          ></input>

          <input
            className="mt-2 border focus:border-2 border-slate-50 rounded-md bg-black w-full h-12 text-lg text-white px-2 outline-0 focus:border-slate-100 placeholder:text-slate-100"
            placeholder="Username"
            ref={usernameRef}
          ></input>

          <input
            className="mt-2 border focus:border-2 border-slate-50 rounded-md bg-black w-full h-12 text-lg text-white px-2 outline-0 focus:border-slate-100 placeholder:text-slate-100"
            placeholder="Email ID"
            ref={emailRef}
          ></input>

          <input
            className="mt-2 border focus:border-2 border-slate-50 rounded-md bg-black w-full h-12 text-lg text-white px-2 outline-0 focus:border-slate-100 placeholder:text-slate-100"
            placeholder="Password"
            ref={passwordRef}
          ></input>

          <div className="mt-5">
            <div className="text-white text-base font-bold">Date of Birth</div>
            <div className="text-slate-100 text-sm my-1">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </div>
            <div className="flex justify-center mt-2">
              <input
                className="border focus:border-2 border-slate-50 w-24 mr-3 rounded-md bg-black h-12 text-lg text-white text-center px-2 outline-0 focus:border-slate-100 placeholder:text-slate-100"
                placeholder="DD"
                maxLength={2}
                ref={dateRef}
              ></input>
              <input
                className="border focus:border-2 border-slate-50 w-24 mr-3 rounded-md bg-black h-12 text-lg text-white text-center px-2 outline-0 focus:border-slate-100 placeholder:text-slate-100"
                placeholder="MM"
                maxLength={2}
                ref={monthRef}
              ></input>
              <input
                className="border focus:border-2 border-slate-50 w-36 rounded-md bg-black h-12 text-lg text-white text-center px-2 outline-0 focus:border-slate-100 placeholder:text-slate-100"
                placeholder="YYYY"
                maxLength={4}
                ref={yearRef}
              ></input>
            </div>
          </div>

          <button className="text-black bg-white mt-10 rounded-full w-full h-9 flex justify-center text-sm font-bold" onClick={handleSignUp}>
            <div className="my-auto">Sign up</div>
          </button>

          <div className="text-slate-100 mt-7">
            Already have an account?{" "}
            <span
              className="text-slate-300 cursor-pointer hover:underline"
              onClick={() => {
                navigate("/login")
              }}
            >
              Sign in
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
