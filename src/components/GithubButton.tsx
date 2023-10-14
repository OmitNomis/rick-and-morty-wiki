"use client";
import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
export const GithubButton = () => {
  const handleGithubPressed = () => {
    window.open("https://github.com/OmitNomis");
  };
  return (
    <div className="flex-1 flex justify-center">
      <GitHubLogoIcon
        height={25}
        width={25}
        className="cursor-pointer"
        onClick={handleGithubPressed}
      />
    </div>
  );
};
