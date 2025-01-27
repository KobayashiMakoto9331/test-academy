import Link from "next/link";
import { Input } from "@/components/ui/input";

const categories = [
  "マーケティング",
  "ビジネス",
  "歴史",
  "政治経済",
  "投資・資産運用",
  "自己啓発",
  "フィットネス",
  "断捨離",
];

export function Sidebar() {
  return (
    <aside className="w-52 p-4">
      <div className="mb-6">
        <Input
          type="search"
          placeholder="コンテンツを検索"
          className="w-full"
        />
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-sm text-gray-500 mb-2">カテゴリー</h2>
          <nav className="space-y-1">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="block px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded"
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
