const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

function postScore(score) {
  instance.post('/game/score', {
    score: score
  })
  .then(function (response) {
    console.log(response.data.msg);
  })
  .catch(function (error) {
      console.log(error);
  });
} 