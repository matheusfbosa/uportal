import Parcel from "single-spa-react/parcel";

const submenus = [
  { id: 1, name: "About", url: "/about" },
  { id: 2, name: "Contact", url: "/contact" },
];

const Layout = ({ children }) => (
  <>
    <Parcel
      config={() => System.import("@uportal/navbar")}
      submenus={submenus}
    />
    <main>{children}</main>
    <Parcel config={() => System.import("@uportal/footer")} />
  </>
);

export default Layout;
