import { useState, useCallback } from "react";

type ConfirmOptions = {
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
};

export function useConfirmDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<ConfirmOptions | null>(null);

    const showDialog = useCallback((opts: ConfirmOptions) => {
        setOptions(opts);
        setIsOpen(true);
    }, []);

    const closeDialog = useCallback(() => {
        setIsOpen(false);
    }, []);

    return {
        isOpen,
        options,
        showDialog,
        closeDialog,
    };
}
