import { getSession } from '@/utils/session';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';
import { IconCat } from '@tabler/icons-react';
import DropdownProfile from './dropdown-profile';

const NavBar = async () => {
  const session = await getSession();

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <IconCat className="mr-[8px]" color="#45D483" />
        <Link color="foreground" href="/">
          <p className="font-bold text-inherit">MY SPACE</p>
        </Link>
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
      <NavbarContent as="div" justify="end">
        {session === null ? (
          <NavbarItem>
            <Button as={Link} color="primary" href="/login" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        ) : (
          <DropdownProfile session={session} />
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
