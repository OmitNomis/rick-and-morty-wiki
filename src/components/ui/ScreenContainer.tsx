import { FC, PropsWithChildren } from "react";

export const ScreenContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className="p-5 w-full max-w-5xl flex-grow">{children}</div>;
};
