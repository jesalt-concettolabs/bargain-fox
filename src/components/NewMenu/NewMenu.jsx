import React from "react";
import {
  Navbar,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="flex flex-col gap-y-2 outline-none outline-0">
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </MenuList>
      </Menu>
    </>
  );
}

function NavList() {
  return (
    <div className="flex justify-center items-center gap-3">
      <NavListMenu />
      <NavListMenu />
    </div>
  );
}

const NewMenu = () => {
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavList />
      </div>
    </Navbar>
  );
};

export default NewMenu;
