const loginUser = (email, password, onSuccess, onError) => {
  // Chamar banco de dados para os dados de usuário
  setTimeout(() => {
    const error = false;

    if (error) {
      return onError("Erro na conexão com o banco.");
    }

    console.log("Usuário verificado no bando de dados!");
    onSuccess({ email });
  }, 3000);
};

const getUserVideos = (onSuccess, onError) => {
  // Chamar banco de dados para pegar os videos
  setTimeout(() => {
    onSuccess(["video_1", "video_2", "video_3"]);
  }, 2000);
};

const getUserVideosDetails = (onSuccess, onError) => {
  // Chamar detalhes banco de dados para pegar os videos
  setTimeout(() => {
    onSuccess({ id: "1", name: "Node.js Assincrono", duration: 1 });
  }, 2000);
};

const user = loginUser(
  "test@test.com",
  "password",
  (user) => {
    console.log("Usuário logado com sucesso!");
    console.log(user);

    getUserVideos(
      (videos) => {
        console.log("Vídeos do usuário recuperados com sucesso!", videos);

        getUserVideosDetails(
          (video) => {
            console.log("Detalhes do vídeo 1 do usuário", video);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
