const newReview = async (event) => {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.getAttribute("locale-id"));
  console.log(event.target.getAttribute("user-id"));

  const review = document.querySelector("#review-text").value.trim();

  if (review) {
    const response = await fetch(
      `/api/details/${event.target.getAttribute("locale-id")}`,
      {
        method: "POST",
        body: JSON.stringify({
          reviewtext: review,
          name: event.target.getAttribute("name-id"),
          locale_id: event.target.getAttribute("locale-id"),
          user_id: event.target.getAttribute("user-id"),
        }),
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.ok) {
      document.location.replace(
        `/api/details/${event.target.getAttribute("locale-id")}`
      );
    } else {
      alert(response);
    }
  }
};

document
  .querySelector("#review-submit-btn")
  .addEventListener("click", newReview);

// const editComment = async (event) => {
//   const comment = document.querySelector("#comment-text").value.trim();
//   const response = await fetch(
//     `/api/blog/${event.target.getAttribute("blog-id")}`,
//     {
//       method: "PUT",
//       body: JSON.stringify({
//         comment_id: event.target.getAttribute("comment-id"),
//         content: comment,
//       }),
//       headers: { "Content-Type": "application/json" },
//     }
//   );
//   document.location.replace(
//     `/api/blog/${event.target.getAttribute("blog-id")}`
//   );
// };

// const deleteComment = async (event) => {
//   const response = await fetch(
//     `/api/blog/${event.target.getAttribute("blog-id")}`,
//     {
//       method: "DELETE",
//       body: JSON.stringify({
//         comment_id: event.target.getAttribute("comment-id"),
//       }),
//       headers: { "Content-Type": "application/json" },
//     }
//   );
//   document.location.replace(
//     `/api/blog/${event.target.getAttribute("blog-id")}`
//   );
// };

// document.querySelectorAll(".edit-comment-btn").forEach((editCmt) => {
//   editCmt.addEventListener("click", editComment);
// });

// document.querySelectorAll(".delete-comment-btn").forEach((deleteCmt) => {
//   deleteCmt.addEventListener("click", deleteComment);
// });
