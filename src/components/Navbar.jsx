import { NavLink } from "react-router-dom";

const links = [
  {
    title: "",
    link: "/",
  },
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/product",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div style={{ backgroundColor: "grey" }}>
      {links.map(({ title, link }, index) => {
        return (
          <NavLink
            key={index}
            to={link}
            style={(isActive) => ({
              color: isActive ? "green" : "blue",
              padding: 10,
            })}
          >
            {title}
          </NavLink>
        );
      })}
    </div>
  );
    
    //map through the link ad display it in header
  
};
