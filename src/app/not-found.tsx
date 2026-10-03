import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>这条路还未抵达。</h1>
      <p>页面不存在，或已移至其他位置。</p>
      <Link className="button button-primary" href="/">
        返回首页
      </Link>
    </section>
  );
}
