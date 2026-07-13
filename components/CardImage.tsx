import Image from "next/image";

/**
 * Shared image slot for cards/heroes. Renders a real image when `src` is
 * provided; otherwise falls back to the existing initials-placeholder look
 * (.card-photo / .card-logo) so nothing breaks for records without a real
 * photo yet. Once real institution/player photography exists, just start
 * passing `src` for those records too — no other changes needed.
 */
export default function CardImage({
  src,
  alt,
  fallbackText,
  variant = "photo",
  sizes = "(max-width: 620px) 100vw, (max-width: 900px) 50vw, 25vw",
  priority = false,
}: {
  src?: string | null;
  alt: string;
  fallbackText: string;
  variant?: "photo" | "logo";
  sizes?: string;
  priority?: boolean;
}) {
  if (!src) {
    return <div className={variant === "logo" ? "card-logo" : "card-photo"}>{fallbackText}</div>;
  }
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
      <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: "cover" }} priority={priority} />
    </div>
  );
}
