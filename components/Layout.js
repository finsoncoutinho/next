import Nav from "./Nav";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div class=" h-100 bg-gradient-to-r from-gray-500 to-white-500">
      <Nav />
      <div class="p-5 ">
        <main>
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
