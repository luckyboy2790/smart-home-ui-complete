import React from "react";

export interface Props {
    readonly children: React.ReactNode;
}

export interface IButtonLink extends Props {
    href: string;
}