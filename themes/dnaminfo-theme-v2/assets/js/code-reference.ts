globalThis.toggleCodeRefs = (event: PointerEvent, on: boolean) => {
  const { at } = (event.target as HTMLSpanElement).dataset;
  if (!at) return;

  const elements = document.querySelectorAll<HTMLSpanElement>(`span[data-at="${at}"]`);
  for (const element of elements) {
    on ? element.classList.add("active") : element.classList.remove("active");
  }
};

globalThis.appendCodeRef = (blockId: string, at: string, ref: string) => {
  const block = document.getElementById(`code-${blockId}`);
  if (!block) return;

  const line = block.querySelector<HTMLSpanElement>(`code > span.line:nth-child(${at})`);
  if (!line) return;
  const span = document.createElement("span");
  span.classList.add("code-handle");
  span.innerHTML = `(${ref})`;

  line.dataset.at = `${blockId}-${at}`;
  line.onpointerenter = (event) => globalThis.toggleCodeRefs(event, true);
  line.onpointerleave = (event) => globalThis.toggleCodeRefs(event, false);
  line.onpointercancel = (event) => globalThis.toggleCodeRefs(event, false);
  line.appendChild(span);
};