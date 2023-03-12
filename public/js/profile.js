const newLocale = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#locale-name").value.trim();
  const type = document.querySelector("#locale-type").value.trim();
  const price = document.querySelector("#locale-price").value.trim();
  const address = document.querySelector("#locale-address").value.trim();
  const description = document
    .querySelector("#locale-description")
    .value.trim();

  if (name && type && price && address && description) {
    const response = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({
        locale_name: name,
        locale_type: type,
        locale_price: price,
        locale_address: address,
        locale_description: description,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Please enter all fields");
    }
  }
};

const editLocale = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#locale-name").value.trim();
  const type = document.querySelector("#locale-type").value.trim();
  const price = document.querySelector("#locale-price").value.trim();
  const address = document.querySelector("#locale-address").value.trim();
  const description = document
    .querySelector("#locale-description")
    .value.trim();

  const response = await fetch(
    `/api/profile/${event.target.getAttribute("data-id")}`,
    {
      method: "PUT",
      body: JSON.stringify({
        locale_name: name,
        locale_type: type,
        locale_price: price,
        locale_address: address,
        locale_description: description,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  document.location.replace("/profile");
};

const deleteLocale = async (event) => {
  const response = await fetch(
    `/api/profile/${event.target.getAttribute("data-id")}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );
  document.location.replace("/profile");
};

document.querySelectorAll(".edit-locale-btn").forEach((editBtn) => {
  editBtn.addEventListener("click", editLocale);
});

document.querySelectorAll(".delete-locale-btn").forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", deleteLocale);
});

document
  .querySelector(".new-locale-form")
  .addEventListener("submit", newLocale);
