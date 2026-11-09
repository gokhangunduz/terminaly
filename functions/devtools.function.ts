import devTools from "devtools-detect";

const OVERLAY_ID = "devtools-overlay";

export function disableDevTools(): () => void {
  const onChange = (event: Event) => {
    const { isOpen } = (event as CustomEvent<{ isOpen: boolean }>).detail;
    isOpen ? showOverlay() : hideOverlay();
  };

  devTools.isOpen && showOverlay();

  window.addEventListener("devtoolschange", onChange);

  return () => {
    window.removeEventListener("devtoolschange", onChange);
    hideOverlay();
  };
}

function showOverlay() {
  if (document.getElementById(OVERLAY_ID)) return;

  const overlay = document.createElement("div");
  overlay.id = OVERLAY_ID;
  overlay.className =
    "fixed inset-0 z-[100] flex items-center justify-center bg-black text-base text-gray-300 animate__animated animate__fadeIn animate__slower";
  overlay.innerHTML = "<p>Developer Tools is not allowed.</p>";

  document.body.appendChild(overlay);
}

function hideOverlay() {
  document.getElementById(OVERLAY_ID)?.remove();
}
