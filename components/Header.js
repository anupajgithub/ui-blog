import Link from "next/link";

export default function Header() {
  return (
    <navbar class="navbar-container">
      <div class="logo-container">
        <a href="index.html">UI BLOG</a>
      </div>

      <div class="bars">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>

      <ul class="nav-items">
        <li class="nav-link">
          <a href="#">Home</a>
        </li>
        <li class="nav-link">
          <a href="#">Service</a>
        </li>
        <li class="nav-link">
          <a href="#">Projects</a>
        </li>
        <li class="nav-link">
          <a href="#">About</a>
        </li>
        <div class="login-register">
          <a href="#" class="button">
            Login
          </a>
          <a href="#" class="button">
            Register
          </a>
        </div>
      </ul>
    </navbar>
  );
}
let bar = document.querySelector(".bars"),
  navItem = document.querySelector(".nav-items");

bar.addEventListener("click", () => {
  navItem.classList.toggle("active");
});
