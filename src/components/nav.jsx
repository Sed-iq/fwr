import logo from "./../assets/logo.png";

export default () => {
  return (
    <div className="w-full sticky z-20 top-0 flex items-center bg-black h-[100px]">
      <div className=" w-full flex items-center justify-between px-10 p-4">
        <div>
          <img alt="" srcSet={logo} className="w-[50px]" />
        </div>
        <div className="hidden  space-x-7 text-base sm:flex text-[#f5df8a] items-center">
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            HOME
          </p>
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            ABOUT
          </p>
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            COUNTRIES
          </p>
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            BLOG
          </p>
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            TESTIMONIALS
          </p>
          <p className="duration-200 cursor-pointer hover:border-[#f5df8a] border-b-2 py-[7px] border-transparent">
            CONTACT US
          </p>
          <div className="flex space-x-9">
            <button className="py-2 hover:border-transparent hover:bg-[#f5df8a] hover:text-black duration-200 px-7 border-2 text-base border-[#f5df8a] rounded-lg">
              Sign Up
            </button>
            <button className="py-2 hover:border-transparent hover:bg-[#f5df8a] hover:text-black duration-200 px-7 border-2 text-base border-[#f5df8a] rounded-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
