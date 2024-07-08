'use client';

import { useEffect, useState } from 'react';

export default function RenderOnClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return isLoaded ? <>{children}</> : null;
}
