import ShoppingShirt from "../shoppingShirt/shoppingShirt";
import "./navbar.css";
export default function NavbarShopping() {
  return (
    <div className="container-nav">
      <nav className="navbar-sopping">
        <ul>
          <a href="/shoppingPage" className="active-btn">
            <li>ดูทั้งหมด</li>
          </a>
          <a href="/shoppingShirt/shoppingShirt">
            <li>เสื้อ</li>
          </a>
          <a href="/shoppingPage/Glass">
            <li>แก้วน้ำ</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
