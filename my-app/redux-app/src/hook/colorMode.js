import React from "react";

export default function toggleClassNames(value) {
  document.querySelector(`body`).classList.remove("default", "dark", "multi");
  document.querySelector(`body`).classList.add(value);
}
