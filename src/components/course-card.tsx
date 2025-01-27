import Image from "next/image";
import Link from "next/link";
import naImage from "@/assets/images/no-image.png";

export type CourseCardProps = {
  title: { name: string; href: string };
  author: { name: string; href: string };
  imageUrl?: string;
};

export function CourseCard({ title, author, imageUrl }: CourseCardProps) {
  return (
    <div>
      <Link href={title.href} className="group">
        <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
          <Image
            src={imageUrl || naImage}
            alt={title.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <h3 className="text-lg font-medium text-blue-600 mb-1 group-hover:underline">
          {title.name}
        </h3>
      </Link>
      <Link
        href={author.href}
        className="text-sm text-gray-600 hover:underline"
      >
        {author.name}
      </Link>
    </div>
  );
}
