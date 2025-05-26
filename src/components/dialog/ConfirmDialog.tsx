import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { FaPowerOff, FaCheck, FaTimes } from "react-icons/fa";

type ConfirmDialogProps = {
  isOpen: boolean;
  options: {
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    icon?: React.ReactNode;
  } | null;
  onClose: () => void;
};

export default function ConfirmDialog({
  isOpen,
  options,
  onClose,
}: ConfirmDialogProps) {
  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter") {
        e.preventDefault();
        if (isOpen && options?.onConfirm) {
          options.onConfirm();
          onClose();
        }
      }
    };
    if (isOpen) window.addEventListener("keydown", keyListener);
    return () => window.removeEventListener("keydown", keyListener);
  }, [isOpen, onClose]);

  if (!options) return null;

  const {
    title = "Are you sure?",
    description = "This action cannot be undone.",
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm,
  } = options;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          as="div"
          className="fixed inset-0 z-50"
          onClose={onClose}
          aria-modal="true"
          role="dialog"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="bg-[#ffffffbd] text-white w-full max-w-md p-6 rounded-xl shadow-2xl border border-white-500"
              role="document"
              aria-labelledby="confirm-dialog-title"
              aria-describedby="confirm-dialog-description"
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div
                  initial={{ scale: 0.8, rotate: 0 }}
                  animate={{ scale: 1.2, rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-[#00cf68] drop-shadow-[0_0_6px_#00cf68]"
                >
                  {options.icon || <FaPowerOff size={20} />}
                </motion.div>

                <h2
                  id="confirm-dialog-title"
                  className="text-xl font-bold text-[#00cf68] neon-text"
                >
                  {title}
                </h2>
              </div>
              <p
                id="confirm-dialog-description"
                className="mt-2 text-sm text-black"
              >
                {description}
              </p>

              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
                >
                  <FaTimes className="text-lg" />
                  {cancelText}
                </button>

                <button
                  onClick={handleConfirm}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-[#00ff80] text-black hover:bg-[#00e673] transition shadow-[0_0_10px_#00ff88]"
                >
                  <FaCheck className="text-lg" />
                  {confirmText}
                </button>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
