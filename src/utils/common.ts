export function genUrlFragment(fragment: string) {
  const { origin, pathname } = location;
  const url = new URL(`${pathname}#${fragment}`, origin);
  return url.toString();
}
