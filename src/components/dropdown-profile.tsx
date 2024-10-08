'use client';

import { Session } from '@/types/session-model';
import { logout } from '@/utils/session';
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import Link from 'next/link';

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
            src={session.user.avatar}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{session.user.username}</p>
          </DropdownItem>
          <DropdownItem key="settings">
            <Link href={'/profile'}>My Settings</Link>
          </DropdownItem>
          <DropdownItem onClick={() => logout()} key="logout" className="text-[#f31260]" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownProfile;
