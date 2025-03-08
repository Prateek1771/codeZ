import COLORS from "@/app/data/Colors";

import Image from "next/image";
import { Button } from "../ui/button";

function Header() {
  return (
    <div className="p-4 flex justify-between items-center relative">
      <div className="flex gap-2 items-center ">
        <Image src={"/Logo.png"} alt="logo" width={40} height={40} />
        <h2 className="text-xl">CODEZ</h2>
      </div>

      <div className="flex gap-5">
        <Button variant="ghost" className="relative">Sign In</Button>
        <Button
          className="relative cursor-pointer"
          style={{
            backgroundColor: COLORS.BLUE,
          }}
        >
          {" "}
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default Header;
