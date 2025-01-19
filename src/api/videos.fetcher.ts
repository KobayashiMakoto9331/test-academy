import { VideoCardProps } from "@/components/ui/video-card/video-card";
import { listVideo } from "@/types";

export function transformData(
  items: listVideo["items"],
): VideoCardProps[] | undefined {
  if (!items) return;

  return items.map((item) => ({
    thumb: item.thumbnail_img_url,
    title: item.content_name,
    contentId: item.content_id,
  }));
}

export async function fetchListVideos(): Promise<listVideo["items"]> {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const res = await fetch(`${baseUrl}/list-video.json`);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  return data.items;
}
