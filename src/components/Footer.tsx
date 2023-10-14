import React from "react";
import { Text } from "./ui";
import { GithubButton } from "./GithubButton";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex w-full max-w-5xl px-5 p-3 justify-between border-t-1 dark:border-gray-600">
      <div className="flex-1 flex justify-start">
        <Text>© {currentYear}</Text>
      </div>
      <GithubButton />
      <div className="flex-1 justify-end flex">
        <Text>
          Made with
          <Text className="text-purple-500 dark:text-purple-400">{" <3 "}</Text>
          by OmitNomis
        </Text>
      </div>
    </footer>
  );
};
