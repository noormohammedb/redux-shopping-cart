import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

function Navbar() {
  const cartState = useSelector((store) => store.cart);
  const { amount } = cartState;
  // const cartState = useSelector(console.log);
  console.log("cartState: ", cartState);
  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>redux toolkit</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
