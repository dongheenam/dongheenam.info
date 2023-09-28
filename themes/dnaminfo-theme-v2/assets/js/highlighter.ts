const toggleClass = (el: HTMLElement, on: boolean | undefined) => {
  on ? el.classList.add("hl") : el.classList.remove("hl");
}

globalThis.toggleHighlight = (event: PointerEvent, on: boolean) => {
  const {
    blockId,
    from,
    to
  } = (event.target as HTMLSpanElement).dataset;
  const idxStart = parseInt(from as string) - 1;
  const idxEnd = to ? parseInt(to as string) : idxStart + 1;

  const block = document.getElementById(`code-${blockId}`);
  if (!block) return;

  const lines = block.querySelectorAll<HTMLSpanElement>('code > span.line');
  for (let i = idxStart; i < idxEnd; i++) {
    toggleClass(lines[i], on);
  }
};