const express = require('express');
const morgan = require('morgan');
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')

const prisma = new PrismaClient()

const app = express();

app.use(morgan('dev'))
app.use(cors())
app.listen(5000)
console.log("Server on port 5000")

app.get('/',(req,res)=>{
    res.send('Hola world!');
})

app.get('/estudiante/', async(req, res) =>{
    const estu = await prisma.estudiante.findMany();
    res.json(estu)
})
app.get('/materias/', async(req, res) =>{
    const estu = await prisma.materia.findMany();
    res.json(estu)
})
app.get('/profesores/', async(req, res) =>{
    const estu = await prisma.profesor.findMany();
    res.json(estu)
})
app.get('/facultades/', async(req, res) =>{
    const estu = await prisma.facultad.findMany();
    res.json(estu)
})

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type, Accept");
    next();
});