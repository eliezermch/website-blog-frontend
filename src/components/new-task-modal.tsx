'use client';

import { addTask } from '@/app/actions/add-task-action';
import { Session } from '@/types/session-model';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea, Input } from '@nextui-org/react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  title: string;
  isOpen: boolean;
  userData: Session;
  onOpen: () => void;
  onOpenChange: () => void;
}

const TASKS_API = 'http://127.0.0.1:8000/api/tasks/';

export default function NewTaskModal({ isOpen, onOpenChange, title, userData }: Props) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    name: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const newErrors: any = { ...errors };

    if (name === 'name' && /\d/.test(value)) {
      newErrors[name] = 'Name should not contain numbers';
    } else {
      newErrors[name] = ''; // Clear error if validation passes
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const handlePost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(TASKS_API, formData, userData.user.token);
  };

  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        size="2xl"
        classNames={{
          backdrop: 'bg-green-900/20 backdrop-opacity-40',
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="min-h-[400px]">
          {(onClose) => (
            <>
              <form
                className="flex flex-col gap-4 mt-2"
                onSubmit={(event) => {
                  handlePost(event);
                }}
              >
                <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                <ModalBody>
                  <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                      type="text"
                      label="Title"
                      name="title"
                      labelPlacement={'outside'}
                      placeholder="Enter your ToDo title"
                      isRequired
                      onChange={handleChange}
                    />
                  </div>
                  <Textarea
                    onChange={handleChange}
                    isRequired
                    type="text"
                    label="Description"
                    name="description"
                    labelPlacement="outside"
                    placeholder="Enter your ToDo description"
                    className="max-w-full"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit" onPress={onClose}>
                    Save
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
