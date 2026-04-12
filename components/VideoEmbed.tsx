"use client";

interface VideoEmbedProps {
  url: string;
  caption?: string;
}

function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

function getVimeoId(url: string): string | null {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
}

export default function VideoEmbed({ url, caption }: VideoEmbedProps) {
  const youtubeId = getYouTubeId(url);
  const vimeoId = getVimeoId(url);

  if (!youtubeId && !vimeoId) {
    return (
      <div className="bg-[var(--color-cream)] rounded-lg p-4 text-center text-[var(--color-warm-gray)]">
        Invalid video URL
      </div>
    );
  }

  const embedUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}`
    : `https://player.vimeo.com/video/${vimeoId}`;

  return (
    <figure className="my-6">
      <div className="aspect-video rounded-lg overflow-hidden shadow-[var(--shadow-warm)]">
        <iframe
          src={embedUrl}
          title={caption || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-[var(--color-warm-gray)] mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
