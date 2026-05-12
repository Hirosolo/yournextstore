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
      className={`absolute left-0 right-0 top-full bg-white border-t border-slate-100 shadow-md z-50 transition-all duration-150 ${open ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-slate-700 max-h-[60vh] overflow-y-auto">
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
          <div className="mt-4">
            <Link href={viewAllPath} className="inline-block font-semibold text-sm hover:underline">
              View all
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
