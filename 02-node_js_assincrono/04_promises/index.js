const loginUser = (email, password) => {
  // Retorne uma promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        return reject("Erro na conexão ao banco.");
      }
      resolve({ email, password });
    }, 3000);
  });
};

const getUserVideos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video 1", "video 2", "video 3"]);
    }, 2000);
  });
};

const getUserVideosDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: "1", name: "Full Stack Club", duration: 1 });
    }, 2000);
  });
};

const user = loginUser("test@test.com", "password")
  .then((user) => {
    console.log("Usuário logado com sucesso!");
    console.log("Dados do usuário ", user);

    return getUserVideos();
  })
  .then((videos) => {
    console.log("Vídeos do usuário resgatados com sucesso! ", videos);

    return getUserVideosDetails();
  })
  .then((video) => {
    console.log("Detalhes do video 1 ", video);
  })
  .catch((error) => {
    console.log(error);
  });
