"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function WechatContact({ value, label = "微信号" }: { value: string; label?: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
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
        onClick={copy}
        className="copy-button"
        aria-label={`复制${label} ${value}`}
      >
        {status === "copied" ? (
          <Check size={15} aria-hidden="true" />
        ) : (
          <Copy size={15} aria-hidden="true" />
        )}
        {status === "copied" ? "已复制" : "复制"}
      </button>
      <span className="copy-feedback" data-status={status} role="status">
        {status === "copied" ? `已复制${label}` : status === "failed" ? "请选中并手动复制。" : ""}
      </span>
    </div>
  );
}
