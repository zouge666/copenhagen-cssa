import { ArrowUpRight, MessageCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { communities } from "@/content/contact";
import { WechatContact } from "./wechat-contact";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/zh";

export function CommunityGrid({
  locale,
  copy,
  showContactLink = true,
}: {
  locale: Locale;
  copy: Dictionary;
  showContactLink?: boolean;
}) {
  return (
    <div className="community-grid">
      {communities.map((community, index) => (
        <article className="community-card" key={community.id}>
          <div className="community-card-top">
            <span className="eyebrow">{copy.contact.communityCards[index].label}</span>
            {index === 0 ? (
              <MessageCircle size={25} strokeWidth={1.3} aria-hidden="true" />
            ) : (
              <ShoppingBag size={25} strokeWidth={1.3} aria-hidden="true" />
            )}
          </div>
          <h3>{copy.contact.communityCards[index].title}</h3>
          <p>{copy.contact.communityCards[index].description}</p>
          <WechatContact value={community.wechat} copy={copy.common} />
          {showContactLink && (
            <Link href={localePath(locale, "/contact")} className="text-link">
              {copy.contact.more}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
