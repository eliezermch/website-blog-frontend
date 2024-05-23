import { markAsDoneTask } from '@/app/actions/mark-done-task-action';
import { updateTask } from '@/app/actions/update-task-action';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Textarea,
} from '@nextui-org/react';
import { useState } from 'react';

interface Props {
  title: string;
  description: string;
  done: boolean;
  isOpen: boolean;
  id: number;
  authToken: string;
  onOpen: () => void;
  onOpenChange: () => void;
}

export default function TaskModal({ isOpen, onOpenChange, title, description, id, authToken, done }: Props) {
  const [titleValue, setTitleValue] = useState<string>(title);
  const [descriptionValue, setDescriptionValue] = useState<string>(description);
  const [error, setError] = useState<string>('This field may not be blank.');
  const [success, setSuccess] = useState<boolean>();

  const handleDone = () => {
    markAsDoneTask(`http://127.0.0.1:8000/api/tasks/${id}/done/`, authToken);
  };

  const handleUpdate = async () => {
    if (titleValue !== '') {
      const response = await updateTask(
        `http://127.0.0.1:8000/api/tasks/${id}/`,
        {
          title: titleValue,
          description: descriptionValue,
        },
        authToken
      );
      setError(response?.data.title);
      setSuccess(response?.success);
    }
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
        <ModalContent className="min-h-[380px]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 mt-6">
                <Input
                  type="text"
                  label=""
                  defaultValue={title}
                  errorMessage={error}
                  isRequired
                  onValueChange={setTitleValue}
                />
              </ModalHeader>
              <ModalBody className="h-full">
                <Textarea
                  onValueChange={setDescriptionValue}
                  type="text"
                  minRows={5}
                  defaultValue={description}
                  label=""
                  name="description"
                  className="max-w-full"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Checkbox onClick={handleDone} isSelected={done} className="pr-[24px]" color="primary">
                  Mark as done
                </Checkbox>
                <Button
                  color="primary"
                  onPress={() => {
                    handleUpdate();
                  }}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
