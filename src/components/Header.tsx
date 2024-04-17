import Link from "next/link";
import title from "../../public/title.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link className="imagelink" href="/">
        <div className="headerimage">
          <Image src={title} alt="" height="32" />
        </div>
      </Link>
      <nav className="headernav">
        <ul>
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/about">NPCAについて</Link>
          </li>
          <li>
            <Link href="/activity">活動内容</Link>
          </li>
          <li>
            <Link href="/record">活動記録</Link>
          </li>
          <li>
            <Link href="/projects">作品一覧</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
