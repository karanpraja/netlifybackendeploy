const express =require ("express")
const serverless =require("serverless-http")
const app= express()
const router=express.Router()
// const port=4000
// app.listen(port,(req,res)=>{
//     console.log(`server listening on port ${port}`)
// })
router.get('/', (req, res) => {
    console.log("running")
    res.send('App is running..');
  });
  router.get('/demo', (req, res) => {
    res.json({message:'demo '});
  });
  

app.use('/.netlify/src/api',router)

module.exports.handler=serverless(app)

