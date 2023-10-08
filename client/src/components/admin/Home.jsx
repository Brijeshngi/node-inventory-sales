// import { Register } from "./Register";

import { Login } from "./Login";

export const Home = () => {
  return (
    <>
      <div className="container">
        <header>
          <h1>Omega</h1>
        </header>
        <div className="content">
          {/* <Register /> */}
          <Login />
        </div>
        <footer>
          <p>copyrights reserved@Omega</p>
        </footer>
      </div>
    </>
  );
};
