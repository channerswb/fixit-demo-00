/* =========================================================
   FixIt interactions
   One section per feature. Each section checks its elements
   exist first, so this one file can be loaded on every page.
   ========================================================= */

/* ---------- Show the chosen photo's file name (details.html) ---------- */
const photoInput = document.querySelector("#photo");
const photoName = document.querySelector("#photo-name");

if (photoInput && photoName) {
  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];

    // FIX: switched innerHTML to textContent. A file name is user input,
    // so it should never be treated as HTML (security).
    photoName.textContent = file ? `Chosen: ${file.name}` : "No photo chosen";
  });
}
