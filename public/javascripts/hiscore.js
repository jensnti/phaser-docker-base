const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

function postScore(score, name) {
  instance.post('/game/score', {
    score: score,
    name: name.substring(0, 3)
  })
  .then(function (response) {
    console.log(response.data.msg);
  })  
  .catch(function (error) {
      console.log(error);
  });
} 