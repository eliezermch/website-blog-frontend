'use client';

import { Session } from '@/types/session-model';
import { getRandomHexColor } from '@/utils/functions';
import { logout } from '@/utils/session';
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';

interface Props {
  session: Session;
}

const DropdownProfile = ({ session }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="primary"
            name={session.user.first_name}
            size="sm"
            src={`https://images.placeholders.dev/?text=${session.user.first_name
              .charAt(0)
              .toLocaleUpperCase()}&width=50&height=50&bgColor=${getRandomHexColor()}`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{session.user.username}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem onClick={() => logout()} key="logout" className="text-[#f31260]" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownProfile;
