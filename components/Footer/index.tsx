"use client";
const Footer = () => {
  return (
    <footer
      className="wow fadeInUp p-6 dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
      data-wow-delay=".1s"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:text-center text-left">
        <p className="text-lg font-semibold text-gray-800 dark:text-white">
          Puertas blindadas
        </p>
      </div>


      <div className="absolute right-10 top-5 z-[-1] flex gap-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <a
          href="https://www.tiktok.com/@puertasblindada"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform bg-cyan-100 rounded-full transform hover:scale-110"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all transform hover:scale-125 hover:rotate-12 ease-in-out duration-300 shadow-lg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C13.5 6 15 7 19 7V11C17.3 11 15.7 10.6 14.4 9.8V14.5C14.4 19 11.2 22 6.9 22C4.7 22 3 21.3 2 20.3C1 19.3 1 18.2 1 17.6H5C5 18 5.1 18.5 5.5 18.9C5.9 19.3 6.5 19.5 7 19.5C9.6 19.5 10.4 17.6 10.4 14.8V2H12Z"
              fill="#F7A8B8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C13.5 6 15 7 19 7V11C17.3 11 15.7 10.6 14.4 9.8V14.5C14.4 19 11.2 22 6.9 22C4.7 22 3 21.3 2 20.3C1 19.3 1 18.2 1 17.6H5C5 18 5.1 18.5 5.5 18.9C5.9 19.3 6.5 19.5 7 19.5C9.6 19.5 10.4 17.6 10.4 14.8V2H12Z"
              fill="#69C9D0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C13.5 6 15 7 19 7V11C17.3 11 15.7 10.6 14.4 9.8V14.5C14.4 19 11.2 22 6.9 22C4.7 22 3 21.3 2 20.3C1 19.3 1 18.2 1 17.6H5C5 18 5.1 18.5 5.5 18.9C5.9 19.3 6.5 19.5 7 19.5C9.6 19.5 10.4 17.6 10.4 14.8V2H12Z"
              fill="#010101"
            />
          </svg>


        </a>
        <a
          href="https://wa.me/0034643763505"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all transform hover:scale-125 hover:rotate-12 ease-in-out duration-300 shadow-lg"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block mx-auto"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.5 2 2 6.5 2 12C2 13.8 2.5 15.5 3.3 17L2 22L6.8 20.7C8.3 21.5 10 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 5.5C8.4 5.5 5.5 8.4 5.5 12C5.5 13.5 6 14.9 6.9 16L6 19L9 18C10 18.5 11 18.7 12 18.7C15.6 18.7 18.5 15.8 18.5 12C18.5 8.4 15.6 5.5 12 5.5ZM10 9C10.3 9 10.5 9.2 10.5 9.5C10.5 9.7 10.4 9.9 10.2 10.1L9.6 10.7C9.4 10.9 9.3 11.2 9.4 11.5C9.9 12.6 10.6 13.3 11.7 13.8C12 13.9 12.3 13.8 12.5 13.6L13.3 12.9C13.5 12.7 13.7 12.7 13.9 12.8L15.7 14.2C16 14.4 16 14.7 15.8 15C15.2 15.8 14.1 16.4 13 16.4C12.3 16.4 11.6 16.2 10.9 15.9C9.3 15.2 8 13.9 7.2 12.2C6.8 11.4 6.6 10.7 6.6 10C6.6 8.9 7.2 7.8 8 7.2C8.3 7 8.6 7 8.8 7.2L10.2 8C10.4 8.2 10.5 8.4 10.5 8.7V9Z"
              fill="#25D366"
            />
          </svg>

        </a>
        <a
          href="mailto:Puertasblindadas773@gmail.com"
          className="transition-all transform hover:scale-125 hover:rotate-12 ease-in-out duration-300 shadow-lg"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6ZM20 6L12 11L4 6H20ZM4 18V8L12 13L20 8V18H4Z"
              fill="#EA4335"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
