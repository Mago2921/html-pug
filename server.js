//dependencies
const express = require('express');


//instantiations
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');



//configurations(custom settings)

//middleware
//handles reading of data from the <form> element
app.use(express.urlencoded({extended: true}));
// app.use('/index',()=>{
//   console.log('someone just went to index')
// });
// app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/index',(req,res)=>{
  res.render('index', {title:"ZaCar Wash register", message:"this is how we pug",heading:"learning pug from scratch"})
});
//home route
app.get('/home',(req,res)=>{
  res.render('home')
});
//washerroute
app.get('/washers',(req,res)=>{
  res.render('washer')
});



app.post('/index', (req,res)=>{
  console.log(req.body)
  res.send("The data has been submitted")
});

// handle non existing routes
app.get('*', (req, res)=> {
  res.status(404).send('This is an invalid URL')
})








app.get('/', (req, res) => res.send('Hello World!'));

























//server
app.listen(3000, () => console.log('Example app listening on port 3000!'));