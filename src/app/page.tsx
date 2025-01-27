import { Header } from "@/components/header";
import { UserNav } from "@/components/user-nav";
import { Sidebar } from "@/components/sidebar";
import { CourseCard, CourseCardProps } from "@/components/course-card";
import { Footer } from "@/components/footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const courses: CourseCardProps[] = [
  {
    title: { name: "「財務省支配」と「失われた30年のカラクリ」", href: "#" },
    author: { name: "三橋貞明", href: "#" },
    imageUrl: undefined,
  },
  {
    title: {
      name: "「ジャパンハンドラー」と「対米従属のカラクリ」",
      href: "#",
    },
    author: { name: "三橋貞明", href: "#" },
    imageUrl: undefined,
  },
  {
    title: {
      name: "自民党の研究 特別講義「失われた30年のカラクリ」",
      href: "#",
    },
    author: { name: "三橋貞明", href: "#" },
    imageUrl: undefined,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* ログイン中に表示する */}
      <UserNav />

      <main className="flex container py-8">
        <div className="flex gap-8">
          <Sidebar />

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">購入したすべての講座</h1>
              <Select defaultValue="newest">
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="並び替え" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">新着順</SelectItem>
                  <SelectItem value="oldest">古い順</SelectItem>
                  <SelectItem value="popular">人気順</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, i) => (
                <CourseCard key={i} {...course} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
