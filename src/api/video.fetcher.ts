import { Video } from "@/types";

export async function fetchVideo({ contentId }: { contentId: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const res = await fetch(`${baseUrl}/list-video.json`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  const item = data.items.find(
    (item: Video) => item.content_id.toString() === contentId,
  );
  if (!item) return null;

  return {
    videoId: item.video_id,
    title: item.content_name,
  };
}
