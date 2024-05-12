'use client';

import { Button, Card, CardBody, useDisclosure } from '@nextui-org/react';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import TaskModal from './task-modal';

const TaskCard = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  };

  return (
    <>
      <Card className="bg-green-700 mb-[12px] hover:cursor-pointer">
        <CardBody onClick={onOpen} className="max-h-[140px] min-h-[100px]">
          <div className="flex justify-between">
            <h4>tilte</h4>
            <div className="flex gap-[8px]">
              <IconEdit onClick={onOpen} className="w-5 h-5 hover:cursor-pointer hover:opacity-[0.8]" />

              <IconTrash className="w-5 h-5 hover:text-rose-700 hover:cursor-pointer" />
            </div>
          </div>

          <p>{truncate('Make beautiful websites regardless of your design experience.', 82)}</p>
        </CardBody>
      </Card>
      <TaskModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default TaskCard;
