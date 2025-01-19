"use client";
import { WistiaPlayer } from "@wistia/wistia-player-react";

type ContentVideoProps = {
  videoId: string;
};

export const ContentVideo = ({ videoId }: ContentVideoProps) => {
  return (
    <WistiaPlayer
      mediaId={videoId}
      playerColor="1e64f0"
      onPlay={() => console.log("Wistia video is playing!")}
      aspect={16 / 9}
    />
  );
};
