import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col items-start space-y-3 mb-6 md:mb-0">
            <div className="flex items-center">
              <img
                src="/logo/logo-dark.webp"
                className="h-8 me-3"
                alt="Octa UI"
              />
              <span className="text-[#666666] text-sm">© 2024</span>
            </div>

            <div className="flex flex-row items-center space-x-2">
              <div className="bg-blue-500 rounded-full h-2.5 w-2.5" />
              <span className="text-sm text-blue-500">v.1.0.0</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold tracking-tight">
                Connect
              </h2>
              <ul className="text-[#666666] text-sm tracking-tight">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/seifradwane/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/seifeldinio"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold tracking-tight">
                Resources
              </h2>
              <ul className="text-[#666666] text-sm tracking-tight">
                <li className="mb-4">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/docs/guides/nextjs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold tracking-tight">
                Legal
              </h2>
              <ul className="text-[#666666] text-sm tracking-tight">
                <li className="mb-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-row items-center space-x-2">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Built with ❤️ and 🍕 by
            </span>
            <img src="/images/profile.webp" alt="Seif" className="h-8 w-auto" />
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Seif Radwane
            </span>
          </div>
          <div className="flex mt-0 sm:justify-center space-x-4">
            <a
              href="https://github.com/seifeldinio"
              className="opacity-60 hover:opacity-100 transition-all duration-150 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/svg/github-dark.svg"
                alt="GitHub"
                className="h-5 w-auto "
              />

              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/seifradwane/"
              className="opacity-60 hover:opacity-100 transition-all duration-150 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/svg/linkedin.svg"
                alt="GitHub"
                className="h-5 w-auto "
              />

              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
