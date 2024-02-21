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

const getUserData = async () => {
  try {
    const user = await loginUser("test@test.com", "passaword");

    console.log("Usuário logado com sucesso!");
    console.log("Dados do usuário: ", user);

    const videos = await getUserVideos();

    console.log("Videos: ", videos);

    const videosDetails = await getUserVideosDetails();

    console.log("Detalhes do video 01: ", videosDetails);
  } catch (error) {
    console.log(error);
  }
};

getUserData();
