import { markAsDoneTask } from '@/app/actions/mark-done-task-action';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox } from '@nextui-org/react';

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
  const handleDone = () => {
    markAsDoneTask(`http://127.0.0.1:8000/api/tasks/${id}/done/`, authToken);
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
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <p>{description}</p>
                {done ? <p>✅</p> : null}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Checkbox onClick={handleDone} className="pr-[24px]" color="primary">
                  Mark as done
                </Checkbox>
                <Button color="primary" onPress={onClose}>
                  Edit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
