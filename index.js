const express = require('express');
const app = express();
const cors = require('cors');
const corsOpt = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};
const path = require('path');

const { adminMiddleware } = require('./middlewares/adminMiddlware.js')

const { searchProducts } = require('./contrllers/adminControllers/productController.js');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const authRoutes = require('./routes/authRoutes.js');
//Admin
const productRoutesAdmin = require('./routes/adminRoutes/productRoutes.js');
const categoryRoutesAdmin = require('./routes/adminRoutes/categoryRoutes.js');
const commentRoutesAdmin = require('./routes/adminRoutes/commentRoutes.js');
const StatisticsRoutesAdmin = require('./routes/adminRoutes/Statistics.js')
const brandRoutesAdmin = require('./routes/adminRoutes/brandRoutes.js')
const orderRoutesAdmin = require('./routes/adminRoutes/orderRoutes.js')
const searchRoutesAdmin = require('./routes/adminRoutes/searchRoutes.js')
const customerRoutesAdmin = require('./routes/adminRoutes/customerRoutes.js');
const voucherRoutesAdmin = require('./routes/adminRoutes/voucherRoutes.js');
const manufacturerRoutesAdmin = require('./routes/adminRoutes/manufacturerRouter.js')
//User
const categoryRoutesClient = require('./routes/userRoutes/categoryRoutes.js');
const forgotPassword = require('./routes/userRoutes/forgotPassword.js')
const changePassword = require('./routes/userRoutes/changePassword.js')
const componentRoutesClient = require('./routes/userRoutes/commentRoutes.js');
const paymentRoutesClient = require('./routes/userRoutes/paymentRoutes.js');
const orderRoutesClient = require('./routes/userRoutes/orderRoutes.js')
const productRoutesClient = require('./routes/userRoutes/productRoutes.js');
const contactRouterClient = require('./routes/userRoutes/contactRoutes.js')
const voucherRouterClient = require('./routes/userRoutes/voucherRoutes.js')
const brandRouterClient = require('./routes/userRoutes/brandRoutes.js')
const wishlistRouterClinet = require('./routes/userRoutes/wishlistRoutes.js')


app.use(cors(corsOpt));

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/admin', [
    categoryRoutesAdmin,
    productRoutesAdmin,
    commentRoutesAdmin,
    StatisticsRoutesAdmin,
    brandRoutesAdmin,
    orderRoutesAdmin,
    searchRoutesAdmin,
    orderRoutesAdmin,
    customerRoutesAdmin,
    voucherRoutesAdmin,
    manufacturerRoutesAdmin
]);

app.use('/user', [
    productRoutesClient,
    categoryRoutesClient,
    componentRoutesClient,
    forgotPassword,
    changePassword,
    orderRoutesClient,
    paymentRoutesClient,
    contactRouterClient,
    voucherRouterClient,
    brandRouterClient,
    wishlistRouterClinet
]);

app.get('/search', searchProducts);

app.listen(3000, () => console.log('Server running on port 3000'));

