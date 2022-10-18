require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const loginRoutes = require('./routes/loginRoutes');
const userRegister = require('./routes/registRoutes')
const userAdmin = require('./routes/userAdminRouters')
const productAdmin = require('./routes/productAdminRouters')
const logoutRoutes = require('./routes/logoutRoutes')
const userInforRoutes = require('./routes/userInforRoutes')
const session = require('express-session');
const cookieParser = require('cookie-parser');


connectDB();
const app = express();
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: false,
  secret: 'demo',
  cookie:{
    maxAge: 1000*60*60 // default session expiration is set to 1 hour
  },
}
))

app.use(express.json());
app.use('/api/products',productRoutes);
app.use('/api/login',loginRoutes);
app.use('/api/regist',userRegister);
app.use('/api/userAdmin',userAdmin)
app.use('/api/productAdmin',productAdmin)
app.use('/api/logout',logoutRoutes)
app.use('/api/myinfor',userInforRoutes)

require('dotenv').config()

const bodyparser = require('body-parser')
const stripe = require('stripe')("sk_test_51KscaFH9mKk9JlNu8VfQVHksd8Tdsu6YszED6lQtp1ePfSkqZzxSpXK8Tx9m3e7IjGyPnT3WpgYqz1hYyEfgMs4t001bDO9SYo");

const uuid = require('uuid').v4;
const cors = require('cors');

connectDB();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(express.json());
app.use('/api/products',productRoutes);
app.use(cors())
// post request
app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);
   
    let error;
    let status;
    try {
      const { cartItems, token } = req.body;
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id,
      });
   
      const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: cartItems.reduce((price, item) => price + item.price * item.qty, 0).toFixed(2)*100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased ${cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)} items`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip,
            },
          },
        },
        {
          idempotency_key,
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
   
    res.json({ error, status });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))