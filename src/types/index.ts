import React, { ReactNode } from "react";

export interface Props {
    readonly children: React.ReactNode;
}

export interface IButtonLink extends Props {
    to: string;
}

export interface AppContextType {
    title: string | null;
    setTitle: (user: string | null) => void;
}

export interface AppProviderProps {
    children: ReactNode;
}

export interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}