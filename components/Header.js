import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import HeaderIcon from "./HeaderIcon";

// material-ui components
import {
  Home,
  Flag,
  ShoppingCart,
  Group,
  ViewComfy,
  Forum,
  ExpandMore,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="flex items-center sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center">
        <Image
          src="https://image.similarpng.com/very-thumbnail/2020/04/Black-icon-facebook-logo-PNG.png"
          width={40}
          height={40}
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100">
          <SearchIcon className="mr-2" />
          <input
            placeholder="search facebook"
            className="bg-transparent outline-none hidden sm:inline-flex"
          />
        </div>
      </div>

      {/* the nav menu */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={Home} />
          <HeaderIcon Icon={Flag} />
          <HeaderIcon Icon={ShoppingCart} />
          <HeaderIcon Icon={Group} />
        </div>
      </div>
      {/* last component */}
      <div className="flex items-center">
        <p className="pr-2 font-semibold whitespace-nowrap"> Magambo Isaac</p>
        <Avatar className="hidden md:inline-flex h-8 w-8" />
        <ViewComfy className="icons" />
        <Forum className="icons" />
        <ExpandMore className="icons" />
      </div>
    </div>
  );
}

export default Header;
