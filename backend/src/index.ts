import express from 'express';

const port = 5000
const app = express()

app.get('/', (req, res) => {
    res.send('app running')
})
  
app.listen(port, () => {
    console.log(`app listening at port ${port}`)
})