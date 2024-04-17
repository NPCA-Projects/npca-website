import Link from "next/link";

export default function Page() {
  return (
    <main className="main">
      <h1>NPCAの由来</h1>
      <p>
        灘校パソコン研究部は、校内生などに略称でNPCA(エヌピーシーエー)と呼ばれています。
      </p>
      <p>NPCAとは、</p>
      <p>Nada Personal Computer users' Association</p>
      <p>
        の頭文字をとったもので、直訳すると「灘校パソコン使用者の会」となります。
      </p>
      <p>
        User’sの「U」が入らなかったのは設立時の権力者が語感を重視したからと言われています。
      </p>
      <p>
        なぜClubではなくAssociationなのかというと、それはNPCAが当初"部"ではなく"同好会"だったからです。
      </p>

      <h1>免責事項について</h1>
      <p>
        免責事項については<Link href="/agreements">こちら</Link>をご覧下さい。
      </p>
    </main>
  );
}
