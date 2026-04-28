import { FileText } from "lucide-react";
import Link from "next/link";

export function PostCard({
  title,
  description,
  date,
  status,
  slug,
  hrefPrefix = "/learning",
}: {
  title: string;
  description: string;
  date?: string;
  status?: string;
  slug: string;
  hrefPrefix?: string;
}) {
  return (
    <div className="glass-panel p-5 flex flex-col h-full hover:shadow-[0_12px_40px_rgba(31,38,135,0.1)] transition-all duration-300">
      <FileText size={24} className="text-[var(--color-brand-primary)] mb-4" />
      <h3 className="font-semibold text-[15px] text-[var(--color-text-primary)] mb-2 line-clamp-2">
        {title}
      </h3>
      <p className="text-[12px] text-[var(--color-text-secondary)] line-clamp-3 mb-4 flex-1">
        {description}
      </p>

      <div className="mt-auto flex flex-col gap-4">
        <div className="text-[12px] text-[var(--color-text-secondary)]">
          {date ? `${date} ${status ? `- ${status}` : ""}` : (
            <span className="badge badge-technical text-[11px] py-1">In Progress</span>
          )}
        </div>
        <Link href={`${hrefPrefix}/${slug}`} className="btn-glass justify-center w-full mt-2">
          View Post
        </Link>
      </div>
    </div>
  );
}
