import express from 'express';
import bodyParser from 'body-parser';
import menuRoutes from './server/routes/MenuRoutes';
import orderRoutes from './server/routes/OrderRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Bem-vindos à API da hamburgueria Comic Burger!',
  })
);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app;
