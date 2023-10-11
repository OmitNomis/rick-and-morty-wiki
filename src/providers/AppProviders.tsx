import { NextUIProvider } from "@nextui-org/react";
import { FC, PropsWithChildren } from 'react'

export const AppProviders: FC<PropsWithChildren> = ({
    children
}) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
};
