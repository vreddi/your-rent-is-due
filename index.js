import app from './src/server/server';

app.listen(process.env.PORT, () => {
  console.log('Listening to PORT', process.env.PORT);
});
