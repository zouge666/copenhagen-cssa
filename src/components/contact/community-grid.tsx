import { ArrowUpRight, MessageCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { communities } from "@/content/contact";
import { WechatContact } from "./wechat-contact";

export function CommunityGrid({ showContactLink = true }: { showContactLink?: boolean }) {
  return (
    <div className="community-grid">
      {communities.map((community, index) => (
        <article className="community-card" key={community.id}>
          <div className="community-card-top">
            <span className="eyebrow">{community.label}</span>
            {index === 0 ? (
              <MessageCircle size={25} strokeWidth={1.3} aria-hidden="true" />
            ) : (
              <ShoppingBag size={25} strokeWidth={1.3} aria-hidden="true" />
            )}
          </div>
          <h3>{community.title}</h3>
          <p>{community.description}</p>
          <WechatContact value={community.wechat} />
          {showContactLink && (
            <Link href="/contact" className="text-link">
              更多联系渠道
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
