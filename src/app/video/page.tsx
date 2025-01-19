import { fetchListVideos, transformData } from "@/api/videos.fetcher";
import { VideoCard } from "@/components/ui/video-card/video-card";

export default async function VideoPage() {
  const items = transformData(await fetchListVideos());

  if (!items) return null;
  return (
    <div>
      {items.map((item) => (
        <div className="p-4" key={item.contentId}>
          <VideoCard {...item} />
        </div>
      ))}
    </div>
  );
}
