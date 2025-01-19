"use client";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import React from "react";

export const ContentVideo = () => {
  return (
    <WistiaPlayer
      mediaId="vp8amj0ovf"
      playerColor="1e64f0"
      onPlay={() => console.log("Wistia video is playing!")}
      aspect={16 / 9}
    />
  );
};
