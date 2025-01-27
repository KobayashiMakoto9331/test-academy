import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function UserNav() {
  return (
    <div className="border-b">
      <div className="flex items-center gap-4 px-4 py-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>YT</AvatarFallback>
        </Avatar>
        <div className="font-medium">山田太郎</div>

        <nav className="ml-auto flex gap-4">
          <Button variant="ghost">
            <Link
              href="/purchased"
              className="border-b-2 border-blue-600 px-3 py-2"
            >
              購入済み
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/following" className="px-3 py-2 text-gray-600">
              フォロー中
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/mylist" className="px-3 py-2 text-gray-600">
              マイリスト
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/events" className="px-3 py-2 text-gray-600">
              参加予定のイベント
            </Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
