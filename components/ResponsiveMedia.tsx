import Image from "next/image";

type ObjectFit = "cover" | "contain";

type ResponsiveMediaProps = {
  kind: "video";
  src: string;
  poster?: string;
  className?: string;
  objectFit?: ObjectFit;
  objectPosition?: string;
  aspectRatio?: string;
  viewportHeight?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: "auto" | "metadata" | "none";
};

type ResponsiveImageProps = {
  kind: "image";
  src: string;
  alt: string;
  className?: string;
  objectFit?: ObjectFit;
  objectPosition?: string;
  aspectRatio?: string;
  viewportHeight?: boolean;
  unoptimized?: boolean;
};

export type MediaProps = ResponsiveMediaProps | ResponsiveImageProps;

function fitClass(objectFit: ObjectFit) {
  return objectFit === "contain" ? "object-contain" : "object-cover";
}

export function ResponsiveMedia(props: MediaProps) {
  const {
    className = "",
    objectFit = "cover",
    objectPosition = "center",
    aspectRatio,
    viewportHeight = false,
  } = props;

  const heightClass = viewportHeight
    ? "h-[100dvh] min-h-[100svh]"
    : aspectRatio
      ? ""
      : "min-h-[40dvh]";

  const style = aspectRatio ? { aspectRatio } : undefined;

  return (
    <div
      className={`relative w-full overflow-hidden ${heightClass} ${className}`.trim()}
      style={style}
    >
      {props.kind === "video" ? (
        <video
          className={`absolute inset-0 h-full w-full ${fitClass(objectFit)}`}
          style={{ objectPosition }}
          src={props.src}
          poster={props.poster}
          autoPlay={props.autoPlay ?? false}
          loop={props.loop ?? true}
          muted={props.muted ?? true}
          playsInline={props.playsInline ?? true}
          preload={props.preload ?? "metadata"}
        />
      ) : props.src.endsWith(".gif") ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={props.src}
          alt={props.alt}
          className={`absolute inset-0 h-full w-full ${fitClass(objectFit)}`}
          style={{ objectPosition }}
          loading="lazy"
        />
      ) : (
        <Image
          src={props.src}
          alt={props.alt}
          fill
          className={fitClass(objectFit)}
          style={{ objectPosition }}
          unoptimized={props.unoptimized}
          sizes="100vw"
        />
      )}
    </div>
  );
}
