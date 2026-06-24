const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let productos = [];

// Obtener productos
app.get('/productos', (req,res)=>{
  res.json(productos);
});

// Agregar producto
app.post('/productos',(req,res)=>{
  const producto = {...req.body, id: Date.now()};
  productos.push(producto);
  res.json(producto);
});

// Eliminar
app.delete('/productos/:id',(req,res)=>{
  productos = productos.filter(p=>p.id != req.params.id);
  res.send("Eliminado");
});

// Vender (guardar venta)
let ventas = [];

app.post('/ventas',(req,res)=>{
  ventas.push({
    id:Date.now(),
    items:req.body,
    fecha:new Date()
  });
  res.send("Venta guardada");
});

app.get('/ventas',(req,res)=>{
  res.json(ventas);
});

app.listen(3000, ()=>console.log("🔥 Servidor corriendo en http://localhost:3000"));