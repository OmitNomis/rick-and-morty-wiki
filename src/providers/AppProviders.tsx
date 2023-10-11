'use client'
import { NextUIProvider } from "@nextui-org/react";
import { FC, PropsWithChildren } from 'react'
import { ThemeProvider } from "next-themes";

export const AppProviders: FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
};
