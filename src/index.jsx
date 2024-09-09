import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div
  className="relative flex size-full min-h-screen flex-col bg-[#fcfbf8] group/design-root overflow-x-hidden"
  style={{ fontFamily: '"Be Vietnam Pro", "Noto Sans", sans-serif' }}
>
  <div className="layout-container flex h-full grow flex-col">
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f1e7] px-10 py-3">
      <div className="flex items-center gap-4 text-[#1c190d]">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-[#1c190d] text-lg font-bold leading-tight tracking-[-0.015em]">
        Interdimensional comedy
        </h2>
      </div>
      <div className="flex gap-2">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f5d33d] text-[#1c190d] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Sign up</span>
        </button>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f1e7] text-[#1c190d] text-sm font-bold leading-normal tracking-[0.015em]"     onClick={() => navigate("/login")}>
          <span className="truncate">Log in</span>
        </button>
      </div>
    </header>
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/8ec06fc2-439a-4231-ba9d-6f815d6e40d7.png")'
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Personalized comedy shows and kids' music
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Powered by AI, the jokes and music on our platform are created
                  just for you. Try it out!
                </h2>
              </div>
            </div>
          </div>
        </div>


        <h2 className="text-[#1c140d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Trending Now</h2>
<div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
  <div className="flex items-stretch p-4 gap-3">
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/66972fc1-a3da-44d1-bd04-df97218ca3d1.png")'}}
      ></div>
      <div>
        <p className="text-[#1c140d] text-base font-medium leading-normal">The Future of Work</p>
        <p className="text-[#9c7349] text-sm font-normal leading-normal">Comedy</p>
      </div>
    </div>
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/9663b303-46da-43e9-98cc-941a57998753.png")'}}
      ></div>
      <div>
        <p className="text-[#1c140d] text-base font-medium leading-normal">The Future of Work</p>
        <p className="text-[#9c7349] text-sm font-normal leading-normal">Comedy</p>
      </div>
    </div>
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/21952886-a04e-41cc-bccf-0ef7c4403b51.png")'}}
      ></div>
      <div>
        <p className="text-[#1c140d] text-base font-medium leading-normal">The Future of Work</p>
        <p className="text-[#9c7349] text-sm font-normal leading-normal">Comedy</p>
      </div>
    </div>
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/469037f7-dddd-4836-82b7-0e7e7116ee33.png")'}}
      ></div>
      <div>
        <p className="text-[#1c140d] text-base font-medium leading-normal">The Future of Work</p>
        <p className="text-[#9c7349] text-sm font-normal leading-normal">Comedy</p>
      </div>
    </div>
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/f868af7d-9107-4c81-8bdf-6bc78fff58cd.png")'}}
      ></div>
      <div>
        <p className="text-[#1c140d] text-base font-medium leading-normal">The Future of Work</p>
        <p className="text-[#9c7349] text-sm font-normal leading-normal">Comedy</p>
      </div>
    </div>
  </div>
</div>

<h2 className="text-[#1c140d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recommended for You</h2>
<div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
  <div className="flex items-stretch p-4 gap-3">
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/f2bfe43f-9b03-4ee8-bb95-ece50dcadfea.png")'}}
      ></div>
      <div>
        <p className="text-[#1c140d] text-base font-medium leading-normal">The Future of Work</p>
        <p className="text-[#9c7349] text-sm font-normal leading-normal">Comedy</p>
      </div>
    </div>
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/f8c66e10-387a-42b6-bdbe-915906687abf.png")'}}
      ></div>
      <div>
        <p className="text-[#1c140d] text-base font-medium leading-normal">The Future of Work</p>
        <p className="text-[#9c7349] text-sm font-normal leading-normal">Comedy</p>
      </div>
    </div>
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/e647c8cc-3915-4c5d-9c90-6e6c3cbc467e.png")'}}
      ></div>
      <div>
        <p className="text-[#1c140d] text-base font-medium leading-normal">The Future of Work</p>
        <p className="text-[#9c7349] text-sm font-normal leading-normal">Comedy</p>
      </div>
    </div>
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/7039fbe0-42f3-4187-b7ed-5ebab0b9cdb9.png")'}}
      ></div>
      <div>
        <p className="text-[#1c140d] text-base font-medium leading-normal">The Future of Work</p>
        <p className="text-[#9c7349] text-sm font-normal leading-normal">Comedy</p>
      </div>
    </div>
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/c49e59b6-1d8a-4adb-8be0-0f77f8d82d6a.png")'}}
      ></div>
      <div>
        <p className="text-[#1c140d] text-base font-medium leading-normal">The Future of Work</p>
        <p className="text-[#9c7349] text-sm font-normal leading-normal">Comedy</p>
      </div>
    </div>
  </div>
</div>

        <div className="flex flex-col gap-10 px-4 py-10 @container">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#1c190d] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
              Jokes and music, just for you
            </h1>
            <p className="text-[#1c190d] text-base font-normal leading-normal max-w-[720px]">
              Our AI learns from your feedback and listening habits to create a
              personalized experience.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/2e8865b5-0391-4d55-98d8-75e2f06ddc13.png")'
                }}
              />
              <div>
                <p className="text-[#1c190d] text-base font-medium leading-normal">
                  Comedy shows for adults
                </p>
                <p className="text-[#9c8d49] text-sm font-normal leading-normal">
                  Discover new comedy shows personalized for you. Like a joke?
                  Save it to your playlist.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/e7b5e15c-b47e-4b4b-aa17-267e5c3f92bd.png")'
                }}
              />
              <div>
                <p className="text-[#1c190d] text-base font-medium leading-normal">
                  Comedy shows for adults
                </p>
                <p className="text-[#9c8d49] text-sm font-normal leading-normal">
                  Listen to a mix of funny, relatable, and heartwarming stories
                  from comedians around the world.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/e6432d67-bc19-4c18-9ae2-51a1121903b4.png")'
                }}
              />
              <div>
                <p className="text-[#1c190d] text-base font-medium leading-normal">
                  Kids' music
                </p>
                <p className="text-[#9c8d49] text-sm font-normal leading-normal">
                  Listen to music that's fun for the whole family, with genres
                  like pop, rock, and hip-hop.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="@container">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#1c190d] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Start your free trial
              </h1>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="flex justify-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f5d33d] text-[#1c190d] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                  <span className="truncate">Get started</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 px-4 py-10 @container">
          <div className="flex flex-col gap-4">
            <h1 className="text-[#1c190d] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
              How it works
            </h1>
            <p className="text-[#1c190d] text-base font-normal leading-normal max-w-[720px]">
              Our AI learns from your feedback and listening habits to create a
              personalized experience.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/079f75ab-a3ef-47bf-9f25-5072b193e3ad.png")'
                }}
              />
              <div>
                <p className="text-[#1c190d] text-base font-medium leading-normal">
                  Comedy shows for adults
                </p>
                <p className="text-[#9c8d49] text-sm font-normal leading-normal">
                  Discover new comedy shows personalized for you. Like a joke?
                  Save it to your playlist.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/stability/a9c5c9ca-2a9e-4aaa-99fa-ee120e4361d1.png")'
                }}
              />
              <div>
                <p className="text-[#1c190d] text-base font-medium leading-normal">
                  Comedy shows for adults
                </p>
                <p className="text-[#9c8d49] text-sm font-normal leading-normal">
                  Listen to a mix of funny, relatable, and heartwarming stories
                  from comedians around the world.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/0598adff-291c-4850-82bd-10b312e81a85.png")'
                }}
              />
              <div>
                <p className="text-[#1c190d] text-base font-medium leading-normal">
                  Kids' music
                </p>
                <p className="text-[#9c8d49] text-sm font-normal leading-normal">
                  Listen to music that's fun for the whole family, with genres
                  like pop, rock, and hip-hop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Index;


