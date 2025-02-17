import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-bg-secondary text-tx-third dark:text-tx-primary text-sm p-4">
      <div className="flex gap-[5rem] justify-center items-center border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-4 items-center">
          <p>Follow me</p>
          <ul className="flex gap-4">
            <li>
              <a href="https://twitter.com/devsoso" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </li>
            <li>
              <a href="https://github.com/devsoso" target="_blank" rel="noopener noreferrer" ><FaGithub /></a>
            </li>
            <li><a href="https://devsoso.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <p>Phone: </p>
          <a href="tel:+250788724867">+250788724867</a>
        </div>
        <div className="flex gap-4">
          <p>Email: </p>
          <a href="mailto:sbananayo98@gmail.com">sbananayo98@gmail.com</a>
        </div>
      </div>
      <div>
        <p className="text-sm text-center mt-2">
          2022 All rights reserved - Developer sostene{" "}
        </p>
      </div>
    </footer>
  );
}