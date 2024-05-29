'use client';

import { Button, Card, CardBody, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@nextui-org/react';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import TaskModal from './task-modal';
import { Session } from '@/types/session-model';
import { deleteTask } from '@/app/actions/delete-task-action';

interface Props {
  index: number;
  title: string;
  description: string;
  done: boolean;
  id: number;
  session: Session;
}

const TASKS_API = 'http://127.0.0.1:8000/api/tasks/';

const TaskCard = ({ title, description, done, id, session, index }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + '...' : str;
  };

  const handleDelete = () => {
    deleteTask(TASKS_API, id, session.user.token);
  };

  return (
    <>
      <Card className="bg-green-700 mb-[12px] hover:cursor-pointer">
        <CardBody onClick={onOpen} className="max-h-[140px] min-h-[100px]">
          <div className="flex justify-between">
            <h4>{title}</h4>
            <div className="flex gap-[8px]">
              <IconEdit onClick={onOpen} className="w-5 h-5 hover:cursor-pointer hover:opacity-[0.8]" />

              <Popover placement="top" color={'default'}>
                <PopoverTrigger>
                  <IconTrash className="w-5 h-5 hover:text-rose-700 hover:cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent>
                  <div className="px-1 py-2">
                    <div className="text-small font-bold mb-2">Delete this ToDo?</div>
                    <Button color="danger" onPress={handleDelete} variant="ghost" size="sm">
                      Yes
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <p>{truncate(description, 82)}</p>
        </CardBody>
      </Card>

      <TaskModal
        title={title}
        description={description}
        done={done}
        id={id}
        authToken={session.user.token}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default TaskCard;
