"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/zh";

export function WechatContact({
  value,
  copy,
  label = copy.wechat,
}: {
  value: string;
  copy: Dictionary["common"];
  label?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className="copy-contact">
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="copy-button"
        aria-label={`${copy.copy} ${label} ${value}`}
      >
        {status === "copied" ? (
          <Check size={15} aria-hidden="true" />
        ) : (
          <Copy size={15} aria-hidden="true" />
        )}
        {status === "copied" ? copy.copied : copy.copy}
      </button>
      <span className="copy-feedback" data-status={status} role="status">
        {status === "copied"
          ? `${copy.copied} ${label}`
          : status === "failed"
            ? copy.manualCopy
            : ""}
      </span>
    </div>
  );
}
