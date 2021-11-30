const postbuilder = async (event) => {
  console.log("is this called");
  event.preventDefault();

  const postText = document.querySelector("#postText").value.trim();
  const genre = document.querySelector("#genreId").value.trim();
  const user = document.querySelector("#userId").value.trim();

  function genreId() {
    const getgenre = await fetch("/api/genres", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    for (var i = 0; i < getgenre.length; i++) {
      if (genre === response.name) {
        //const ids = results.map((department) => department.id);
        let num = response.id;

        return num;
      }
    }
  }

  function userId() {
    const getUsers = await fetch("/api/users/all", {
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
  if (postText && genreId && userId) {
    const response = await fetch("/api/users/post", {
      method: "POST",
      body: JSON.stringify({ postText, genreId, userId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/home/${genreId}`);
    } else {
      alert("Failed to post.");
    }
  }
};

document.querySelector("#postText").addEventListener("click", postbuilder);
