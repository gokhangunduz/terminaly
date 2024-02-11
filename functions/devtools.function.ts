import devTools from "devtools-detect";

export function disableDevTools() {
  devTools.isOpen && devToolsIsOpen();

  window.addEventListener("devtoolschange", ({ detail: { isOpen } }) => {
    if (isOpen) {
      devToolsIsOpen();
    }
  });
}

function devToolsIsOpen() {
  document.body.classList.add(
    "hw-screen",
    "bg-black",
    "animate__animated",
    "animate__fadeIn",
    "animate__slower",
    "text-gray-300",
    "flex",
    "justify-center",
    "items-center",
    "text-sm"
  );
  document.body.innerHTML = `<p>Developer Tools is not allowed.</p>`;
}
