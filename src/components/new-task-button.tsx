'use client';

import { IconPlus } from '@tabler/icons-react';
import React from 'react';
import NewTaskModal from './new-task-modal';
import { useDisclosure } from '@nextui-org/react';
import { Session } from '@/types/session-model';

interface Props {
  data: Session;
}

const NewTaskButton = ({ data }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex gap-1 hover:cursor-pointer" onClick={onOpen}>
        <IconPlus className="text-primary hover:rotate-180 transition-all duration-400 ease-in-out" />
        New To-DO
      </div>

      <NewTaskModal
        userData={data}
        title={'Create your ToDO'}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export { NewTaskButton };
