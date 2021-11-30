const postBuilder = async (event) => {
  console.log("is this called");
  event.preventDefault();

  const postText = document.querySelector("#postText").value.trim();
  console.log(postText);
  // there is no genreID or userId in the document for the following to select; but i did not think of a test for this or where it might break
  // const genre = document.querySelector("#genreId").value.trim();
  // const user = document.querySelector("#userId").value.trim();

  function genreId() {
    const getgenre = fetch("/api/genres", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    for (var i = 0; i < getgenre.length; i++) {
      if (genre === response.name) {
        //const ids = results.map((department) => department.id);
        let num = response.id;
        console.log(getgenre);
        console.log(num);

        return num;
      } else {
        console.log(err);
      }
    }
  }
  genreId();
  console.log(genreId);
  function userId() {
    const user = document.querySelector("#userId").value.trim();
    const getUsers = fetch("/api/users/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    for (var i = 0; i < getUsers.length; i++) {
      if (user === response.username) {
        //const ids = results.map((department) => department.id);
        let num = response.id;

        return num;
      }
    }
  }
  userId();
  console.log(userId);
  if (postText && genreId && userId) {
    console.log("working");
    const response = fetch("/api/users/post", {
      method: "POST",
      body: JSON.stringify({ postText, genreId, userId }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (response.ok) {
      document.location.append(`/home/${genreId}`);
    } else {
      alert("Failed to post.");
    }
  }
};

// document.querySelector("#postText").addEventListener("click", postbuilder);

document.querySelector(".form-post").addEventListener("submit", postBuilder);
