import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <footer className="footer footer-center bg-neutral-800 p-4 mt-auto text-gray-100">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Parm's Dev 👨‍💻
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
