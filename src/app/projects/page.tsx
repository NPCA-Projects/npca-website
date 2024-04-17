import Link from "next/link";

export default function Page() {
  return (
    <main className="main">
      <h1>Gallery</h1>
      <p>
        ここでは、過去の文化祭や企画などで制作したゲームや部誌を掲載しています。
        なおこのページに掲載されている全てのコンテンツの利用に関しましては
        <Link href="/agreements">利用規約</Link>
        をご覧ください。
      </p>
      <h2>game</h2>
      <p>
        部員の作成したゲームを載せています。
        主に各年の中1が文化祭に向けて作ったものです。
      </p>
      <h2>Magazine</h2>
      <p>
        部員の執筆した記事を載せています。
        主に各年の文化祭で配布されたものです。
        完全版はダウンロードしてお楽しみください。
      </p>
      <h2></h2>
    </main>
  );
}
