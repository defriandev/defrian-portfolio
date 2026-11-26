"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
}

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopyEmail}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all active:scale-95 cursor-pointer shadow-2xs"
      aria-label="Copy email address"
    >
      {copied ? (
        <span className="inline-flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-emerald-700 font-semibold">Copied!</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5">
          <Copy className="w-3.5 h-3.5 text-slate-500" />
          <span>Copy</span>
        </span>
      )}
    </button>
  );
};
