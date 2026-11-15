import Image from "next/image";
import { cn } from "@/lib/utils";

/** The Umutako logo. Use "black" on light backgrounds and "gold" on dark or branded accents. */
export function Logo({
  tone = "black", layout = "inline", className,
}: { tone?: "black" | "gold"; layout?: "inline" | "stacked"; className?: string }) {
  if (layout === "stacked") {
    return <Image src={`/logo/umutako-${tone}.png`} alt="Umutako Gift Boutik" width={492} height={476} className={cn("h-24 w-auto", className)} />;
  }
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={tone === "gold" ? "/icon.svg" : "/logo/umutako-mark-black.png"}
        alt=""
        width={64}
        height={64}
        className={cn("h-11 w-auto", tone === "gold" && "-translate-y-0.5")}
        priority
      />
      <Image src={`/logo/umutako-word-${tone}.png`} alt="Umutako Gift Boutik" width={465} height={132} className="h-7 w-auto" priority />
    </span>
  );
}
