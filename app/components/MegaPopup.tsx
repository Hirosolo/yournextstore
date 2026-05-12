"use client";

import Link from "next/link";
import React from "react";

type Group = { title?: string; items: string[] };

export default function MegaPopup({
  open,
  onMouseEnter,
  onMouseLeave,
  groups,
  viewAllPath,
}: {
  open: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  groups: Group[];
  viewAllPath?: string;
}) {
  function toSlug(s: string) {
    return encodeURIComponent(
      s
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    );
  }

  return (
    <div
      className={`fixed left-0 right-0 top-[72px] z-50 max-h-[60vh] overflow-y-auto border-t border-slate-100 bg-white shadow-md transform-gpu origin-top transition-all duration-200 ease-out ${open ? "pointer-events-auto opacity-100 translate-y-0 scale-100" : "pointer-events-none opacity-0 -translate-y-2 scale-[0.98]"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-slate-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <div key={group.title || group.items[0]}>
              {group.title && <div className="font-semibold mb-1">{group.title}</div>}
              <ul className="space-y-1 text-sm">
                {group.items.map((it) => (
                  <li key={it}>
                    {viewAllPath ? (
                      <Link href={`${viewAllPath}/${toSlug(it)}`} className="hover:underline block">
                        {it}
                      </Link>
                    ) : (
                      <span className="block">{it}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {viewAllPath && (
          <div className="mt-6 border-t border-slate-100 pt-4">
            <Link href={viewAllPath} className="block font-semibold text-sm hover:underline">
              View all
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
