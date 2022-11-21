import React from "react";

export default function Skills() {
  return (
    <section id="skills">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-white-800 capitalize lg:text-4xl white:text-white">
          <span class="decoration-blue-500">Features</span>
        </h1>

        <p class="mt-4 text-white-500 xl:mt-6 text-white-300 font-medium">
          Saturn has tons of features, here's our favorites.
        </p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span class="inline-block text-blue-500 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="yellow"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>

            <h1 class="text-2xl font-semibold text-white-700 capitalize text-white">
              It's Super fast & Lightweight
            </h1>

            <p class="text-white-100">
              Saturn was made with speed in mind, no useless animations or bulky
              code. Everything loads in a matter of seconds.
            </p>
          </div>

          <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span class="inline-block text-blue-500 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
              </svg>
            </span>

            <h1 class="text-2xl font-semibold text-white-700 capitalize text-white">
              Privacy first
            </h1>

            <p class="text-white-100">
              Saturn Startpage DOES NOT & never will collect any data about you. Saturn was build with offline use in mind. 
            </p>
          </div>

          <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span class="inline-block text-blue-500 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </span>

            <h1 class="text-2xl font-semibold text-white-700 capitalize text-white">
              Simple & Modern. By design
            </h1>

            <p class="text-white-100">
              Everything is straight forward and gets you where you need to go
              quickly.
            </p>
          </div>
        </div>
      </div>
      <div class="p-8">
        <div class="flex felx-col items-center justify-center">
          <span class="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm">
            Even more stuff
          </span>
        </div>
        <p class="text-center mt-6 text-lg font-medium text-white-500">
          Over 10+ themes for you to choose from <br />
          Multiple search providers <br />
          Saturn Favorites <br />
          And more for you to discover.
        </p>
      </div>
    </section>
  );
}
