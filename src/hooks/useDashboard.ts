import { useRef, useState } from "react";
import Service from "../services/service";

export default function useDashboard(name: string) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const serviceRef = useRef(new Service(name));
  const [refresh, setRefresh] = useState({});

  const handleEdit = (item: any) => {
    setCurrentItem(item);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setCurrentItem(null);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setRefresh({});
  };

  return {
    modalProps: {
      open: modalOpen,
      currentItem: currentItem,
      onClose: handleClose,
      service: serviceRef.current,
    },
    tableProps: {
      onEdit: handleEdit,
      refresh: refresh,
      service: serviceRef.current,
    },
    handleAdd,
  };
}
