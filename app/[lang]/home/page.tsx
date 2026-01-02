import { Button } from "@/components/ui/button";
import { CountryIcon, ThemeChangerIcon, WebsiteLogo } from "@/lib/svgs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="py-5 flex flex-row justify-between items-center gap-2">
          <WebsiteLogo />
          <div className="flex w-115.5 h-19 px-10 rounded-[100px] justify-center bg-white items-center gap-12">
            <Link
              href={"/pb/home"}
              className="text-[#1D1D1D] text-center block font-medium text-[16px] leading-5.5"
            >
              eSim
            </Link>
            <Link
              href={"/aboutus"}
              className="text-[#1D1D1D] text-center block font-medium text-[16px] leading-5.5"
            >
              Mobile Top-Up
            </Link>
            <Link
              href={"/aboutus"}
              className="text-[#1D1D1D] block text-center font-medium text-[16px] leading-5.5"
            >
              About Us
            </Link>
          </div>
          <div className="flex w-59.5 h-19 p-3 px-10 rounded-[100px] justify-center bg-white items-start gap-3">
            <div className="flex w-13 h-13 p-3 justify-center items-center shrink-0 rounded-[100px] bg-[#F6F6F6]">
              <CountryIcon />
            </div>
            <div className="flex w-13 h-13 p-3 justify-center items-center shrink-0 rounded-[100px] bg-[#F6F6F6] cursor-pointer">
              <ThemeChangerIcon />
            </div>
            <div>
              <Button className="rounded-[100px] w-21.5 h-13 font-medium text-[16px]">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
