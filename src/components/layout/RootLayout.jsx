import { Children } from "react";

const RootLayout = ({ Children }) => {
  return (
    <mian className="main-center">
      <header>나는 완전히 붕괴됬어요</header>
      {Children}
      <footer>나는 footer이에요</footer>
    </mian>
  );
};
