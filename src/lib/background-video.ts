/** Keep a muted background video playable across mobile WebView lifecycles. */
export function attachBackgroundVideo(video: HTMLVideoElement): () => void {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const gestures = ["touchend", "click", "keydown"] as const;
  const mediaEvents = ["loadedmetadata", "canplay"] as const;
  let disposed = false;

  video.defaultMuted = true;
  video.muted = true;
  video.playsInline = true;
  video.setAttribute("webkit-playsinline", "");
  video.setAttribute("x5-playsinline", "");

  const inViewport = () => {
    const bounds = video.getBoundingClientRect();
    return bounds.bottom > 0 && bounds.top < window.innerHeight;
  };

  const tryPlay = () => {
    if (disposed || preference.matches || document.hidden || video.error || !video.paused) {
      return;
    }
    video.muted = true;
    void video
      .play()
      .then(() => {
        if (disposed || preference.matches || document.hidden || !inViewport()) video.pause();
      })
      .catch(() => {
        // Autoplay denial is recoverable at the next readiness or user gesture event.
      });
  };

  const updatePlayback = () => {
    if (preference.matches || document.hidden || !inViewport()) video.pause();
    else tryPlay();
  };
  const applyPreference = () => {
    video.autoplay = !preference.matches;
    updatePlayback();
  };

  // Call play synchronously inside a gesture; deferring it loses user activation.
  for (const event of gestures) {
    document.addEventListener(event, tryPlay, { capture: true, passive: true });
  }
  for (const event of mediaEvents) video.addEventListener(event, updatePlayback);
  document.addEventListener("WeixinJSBridgeReady", updatePlayback);
  document.addEventListener("visibilitychange", updatePlayback);
  window.addEventListener("pageshow", updatePlayback);
  preference.addEventListener("change", applyPreference);

  const observer =
    typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(updatePlayback);
  observer?.observe(video);
  applyPreference();

  return () => {
    disposed = true;
    observer?.disconnect();
    for (const event of gestures) document.removeEventListener(event, tryPlay, true);
    for (const event of mediaEvents) video.removeEventListener(event, updatePlayback);
    document.removeEventListener("WeixinJSBridgeReady", updatePlayback);
    document.removeEventListener("visibilitychange", updatePlayback);
    window.removeEventListener("pageshow", updatePlayback);
    preference.removeEventListener("change", applyPreference);
    video.autoplay = false;
    video.pause();
  };
}
