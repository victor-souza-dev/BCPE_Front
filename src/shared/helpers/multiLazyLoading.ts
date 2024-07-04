import { ILazyLoading, LazyLoading } from "../components/LazyLoading";

interface ILazyComponent extends ILazyLoading {
  name: string;
}

interface IComponentRegistry {
  [key: string]: () => JSX.Element;
}

function createLazyComponent(props: ILazyLoading): () => JSX.Element {
  const { skeleton, ...rest } = props;
  const lazyBody: ILazyLoading = { ...rest };
  if (skeleton) {
    lazyBody.skeleton = skeleton;
  }
  return () => LazyLoading(lazyBody);
}

function registerComponents(components: ILazyComponent[]): IComponentRegistry {
  return components.reduce<IComponentRegistry>((registry, component) => {
    registry[component.name] = createLazyComponent(component);
    return registry;
  }, {});
}

export function multiLazyLoading<T>(components: ILazyComponent[]): T {
  return registerComponents(components) as unknown as T;
}
