"use client";

import { useEffect, useRef } from "react";

export default function InfiniteLoader({
  hasMore,
  loading,
  onLoad,
}: any) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) onLoad();
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasMore, loading]);

  return <div ref={ref} className="h-20" />;
}
