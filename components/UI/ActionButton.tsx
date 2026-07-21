import Link from "next/link";

type ActionButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ActionButton({
  href,
  children,
  variant = "primary",
}: ActionButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const variantStyles =
    variant === "primary"
      ? "bg-[#ff6b00] text-black hover:bg-[#ff7d2b]"
      : "border border-white/15 bg-white/5 text-white hover:border-[#ff6b00] hover:text-[#ff6b00]";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </Link>
  );
}
