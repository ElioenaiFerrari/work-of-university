require('./database');
const { app } = require('./config/app');

app.listen(3000, () => {
  console.log(`Server online at http://localhost:3000`);
});
