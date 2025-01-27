import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white/70 py-4">
      <div className="grid gap-4 px-8">
        <nav className="flex gap-8">
          <Link href="#" className="font-medium text-white">
            採用情報
          </Link>
          <Link href="#" className="font-medium text-white">
            会社情報
          </Link>
        </nav>

        <div>
          <nav className="flex gap-4 mb-4 text-sm">
            <Link href="#" className="hover:text-white">
              このサイトについて
            </Link>
            <Link href="#" className="hover:text-white">
              特定商取引法について
            </Link>
            <Link href="#" className="hover:text-white">
              迷惑メールポリシー
            </Link>
            <Link href="#" className="hover:text-white">
              プライバシーポリシー
            </Link>
            <Link href="#" className="hover:text-white">
              販売規約
            </Link>
            <Link href="#" className="hover:text-white">
              利用規約
            </Link>
          </nav>
          <p className="text-sm">
            Copyright © Direct Publishing,inc All Rights Reserved.
            掲載の情報・画像など、すべてのコンテンツの無断複写・転載を禁じます
          </p>
        </div>
      </div>
    </footer>
  );
}
