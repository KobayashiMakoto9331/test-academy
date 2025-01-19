import { fetchListVideos } from "@/api/videos.fetcher";
import { Video } from "@/types";

export async function fetchVideo({ contentId }: { contentId: string }) {
  const items = await fetchListVideos();
  if (!items) return null;

  const item = items.find(
    (item: Video) => item.content_id.toString() === contentId,
  );
  if (!item) return null;

  return {
    videoId: item.video_id,
    title: item.content_name,
  };
}
