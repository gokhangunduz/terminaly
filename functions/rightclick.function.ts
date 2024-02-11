export function disableRightClick() {
  function handleContextMenu(e: any) {
    e.preventDefault();
  }

  document.addEventListener("contextmenu", handleContextMenu);
  return document.removeEventListener("contextmenu", handleContextMenu);
}
