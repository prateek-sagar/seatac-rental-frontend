import search from "../assets/search-image.png";
import "./css/searchBar.css";
export default function searchBar() {
  return `
     <div class="flex w-full h-auto shadow-[0px_0px_10px_rgba(0,0,0,0.25)] bg-white rounded-full justify-between items-center p-2">
     <div class="w-[85%] md:px-4 lg:px-8 flex md:w-[100%]">
        <div class="flex flex-col w-[30%] md:px-4 justify-center md:w-[30%]">
          <label class="text-[13px] px-2 font-bold text-[#414141] leading-[14px]" for="location">Where</label>
          
          <input
          class="w-full focus:outline-none  text-[#797979] transition px-2 rounded-none text-[13px]"
            type="text"
            id="location"
            placeholder="City, address "
          />
        </div>
        <div class="flex flex-col w-1/3 md:px-4 justify-center h-12 md:border-x-[2px] md:border-gray-300">
          <label class="text-[13px] px-2 font-bold text-[#414141] leading-[14px]" for="from">From</label>
          <div class="text-[13px] flex justify-start">
            <input
            class="focus:outline-none box-content focus:border-0 focus:border-b-2 focus:border-solid transition-all border-b-primary text-[#797979] focus:border-b-primary px-2 rounded-none text-[13px]"
            type="date"

            />
            <input
            class="hidden md:block focus:outline-none focus:border-0 focus:border-b-2 focus:border-solid transition-all border-b-primary text-[#797979] focus:border-b-primary px-2 rounded-none text-[13px]"
            type="time"
            value=""
            />
          </div>
        </div>
          
        <div class="flex flex-col w-1/3 md:px-4 justify-center">
          <label class="text-[13px] px-2 font-bold text-[#414141] leading-[14px]" for="until ">Until</label>
          <div class="text-[13px] flex justify-start">
            <input
            class="focus:outline-none focus:border text-[#797979] focus:border-b-primary px-2 rounded-none text-[13px]"
            type="date"
            />
            <input
            class="hidden md:block focus:outline-none focus:border text-[#797979] focus:border-b-primary px-2 rounded-none text-[13px]"
            type="time"
            />
          </div>
        </div>
      </div>
      <a href="/car-lists" class="p-[6px] rounded-full flex justify-center items-center bg-primary aspect-square">
        <img class="scale-75" src="${search}"/>
      </a>
    </div>
 `;
}
