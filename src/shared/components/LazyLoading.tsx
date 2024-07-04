import { ReactElement, Suspense, lazy, useEffect, useState } from "react";

export interface ILazyLoading {
  children: () => ReactElement;
  skeleton?: () => ReactElement;
  isLazy?: boolean;
  loadTime?: number;
}

export function LazyLoading({
  children,
  skeleton,
  isLazy = true,
  loadTime = 0,
}: ILazyLoading) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, loadTime);

    return () => clearTimeout(timer);
  }, [loadTime]);

  if (!isLazy) return children();

  const lazyValue = () => Promise.resolve({ default: children });
  const SkeletonComponent = skeleton || (() => <div>Loading...</div>);
  const LazyComponent = lazy(() => lazyValue());

  return (
    <Suspense fallback={<SkeletonComponent />}>
      {isLoaded ? <LazyComponent /> : <SkeletonComponent />}
    </Suspense>
  );
}
