import { getSession, logout } from '@/utils/session';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
  Avatar,
} from '@nextui-org/react';
import { IconCat } from '@tabler/icons-react';

const NavBar = async () => {
  const session = await getSession();
  console.log('🚀 ~ NavBar ~ session:', session);

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
      <NavbarContent justify="end">
        <NavbarItem>
          {session === null ? (
            <Button as={Link} color="primary" href="/login" variant="flat">
              Sign Up
            </Button>
          ) : (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="primary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
