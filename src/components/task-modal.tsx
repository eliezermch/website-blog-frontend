import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox } from '@nextui-org/react';

interface Props {
  title: string;
  description: string;
  done: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

export default function TaskModal({ isOpen, onOpenChange, title, description, done }: Props) {
  console.log('🚀 ~ TaskModal ~ done:', done);
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
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Checkbox className="pr-[24px]" defaultSelected color="primary">
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
