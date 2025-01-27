import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="text-l font-bold">DIRECT PUBLISHING</div>

          <div className="flex-1">
            <div className="relative">
              <Input
                type="search"
                placeholder="コンテンツを検索"
                className="w-full bg-white/10 border-none text-white placeholder:text-white/70"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/70" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost">ヘルプ & ガイド</Button>
            <Button variant="ghost">ログアウト</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
