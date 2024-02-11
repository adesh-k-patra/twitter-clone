export default function SearchBar() {
  return (
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
  )
}
