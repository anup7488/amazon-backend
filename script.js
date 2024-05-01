const express=require('express');
const productsRouter=require('./routes/productsRoutes.js')
const usersRouter=require('./routes/userRoute.js')
const reviewRouter=require('./routes/reviewRoute.js')

const app= express();
const mongoose=require('mongoose');
app.use(express.json());

app.use('/api/products',productsRouter);
app.use('/api/users',usersRouter);
app.use('/api/review',reviewRouter);

// const url='mongodb+srv://$USERNAME$:$PASSWORD$@cluster0.5mzncy3.mongodb.net/$DB_NAME$?retryWrites=true&w=majority&appName=Cluster0'
const url='mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.nilopdp.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser='anup';
const databasePassword='1234anup';
const databaseName='amazon_Backend';


let dbLink=url.replace("$USERNAME$",databaseUser);
dbLink=dbLink.replace("$PASSWORD$",databasePassword);
dbLink=dbLink.replace("$DB_NAME$",databaseName);


mongoose.connect(dbLink)
  .then(() => console.log('Database Connected!'));



app.listen(8000,()=>
    console.log("-------app started----------")
);