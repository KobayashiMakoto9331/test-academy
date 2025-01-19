import Image from "next/image";
import Link from "next/link";

export type VideoCardProps = {
  thumb: string;
  title: string;
  contentId: string;
};

export const VideoCard = ({ thumb, title, contentId }: VideoCardProps) => {
  return (
    <Link href={`/video/${contentId}`}>
      <div className="flex items-center gap-4">
        <div>
          <Image src={thumb} alt={title} width={120} height={90} />
        </div>
        <div>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};
