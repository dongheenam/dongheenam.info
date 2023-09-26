globalThis.switchTab = (groupId: string, name: string) => {
  const tabItems = document.querySelectorAll(
    `.tab-item[data-tab-group=${groupId}]`
  );
  const tabButtons = document.querySelectorAll(
    `.tab-button[data-tab-group=${groupId}]`
  );
  ([...tabItems, ...tabButtons] as HTMLElement[]).forEach(
    (item) => {
      if (item.dataset.tabItem === name) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    }
  );
}