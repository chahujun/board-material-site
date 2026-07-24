"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./wpc-product-detail.module.css";

interface WPCProductVideoProps {
  src: string;
  poster: string;
  label: string;
}

function getClipRange(src: string) {
  const match = src.match(/#t=(\d+(?:\.\d+)?),(\d+(?:\.\d+)?)/);
  return match ? { start: Number(match[1]), end: Number(match[2]) } : null;
}

export default function WPCProductVideo({ src, poster, label }: WPCProductVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPortrait, setIsPortrait] = useState(false);
  const clip = getClipRange(src);

  function enforceClipRange(video: HTMLVideoElement) {
    if (!clip) return;
    if (video.currentTime < clip.start) video.currentTime = clip.start;
    if (video.currentTime >= clip.end) {
      video.pause();
      video.currentTime = Math.max(clip.start, clip.end - 0.05);
    }
  }

  function handlePlay() {
    const video = videoRef.current;
    if (!video || !clip) return;
    if (video.currentTime >= clip.end - 0.1) video.currentTime = clip.start;
  }

  return (
    <div className={styles.videoFrame}>
      <video
        ref={videoRef}
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        preload="metadata"
        poster={poster}
        aria-label={label}
        onLoadedMetadata={(event) => {
          setIsPortrait(event.currentTarget.videoHeight > event.currentTarget.videoWidth);
          enforceClipRange(event.currentTarget);
        }}
        onSeeking={(event) => enforceClipRange(event.currentTarget)}
        onTimeUpdate={(event) => enforceClipRange(event.currentTarget)}
        onPlay={handlePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <span className={`${styles.videoBrandBadge} ${isPortrait ? styles.videoBrandBadgePortrait : ""}`} aria-hidden="true">
        <Image src="/images/logo/onestopbuildly-trademark.png" alt="" fill sizes="180px" />
      </span>
    </div>
  );
}
