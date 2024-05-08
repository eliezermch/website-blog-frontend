import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import { IconCat } from '@tabler/icons-react';

const NavBar = async () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <IconCat className="mr-[8px]" color="#45D483" />
        <p className="font-bold text-inherit">MY SPACE</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/profile">
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/tasks" aria-current="page">
            ToDo-List
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="myblog">
            Personal Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
