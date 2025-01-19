import { fetchVideo } from "@/api/video.fetcher";
import { ContentVideo } from "@/components/ui/content-video/content-video";

type Props = {
  params: Promise<{ contentId: string }>;
};

export default async function Page({ params }: Props) {
  const { contentId } = await params;
  const video = await fetchVideo({ contentId });
  if (!video) return null;

  return (
    <div className="p-4">
      <ContentVideo videoId={video.videoId} />
      <div className="p-3">
        <p>{video.title}</p>
      </div>
    </div>
  );
}
