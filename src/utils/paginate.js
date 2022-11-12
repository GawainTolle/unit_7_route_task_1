export function paginate(items, activePage, pageSize) {
  const firstIndex = (activePage - 1) * pageSize;
  return [...items].splice(firstIndex, pageSize);
}
