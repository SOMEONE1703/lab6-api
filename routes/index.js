var express = require('express');
var router = express.Router();

const cars = require('./cars.json');
let next_ind=0;
for (let i=0;i<cars.length;i++){
    let c={
        make:cars[i].make,
        model:cars[i].model,
        year:cars[i].year,
        price:cars[i].price,
        id:i
    };
    next_ind++;
    cars[i]=c;
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(cars);
});
//get all cars
router.get('/cars', (req, res) => {
  res.json(cars);
});

//get car by id
router.get('/cars/:id', (req, res) => {
  const id = req.params.id;
  //const car = cars.find(car => car.id === id);
  const index = cars.findIndex(car => car.id == id);

  res.json(cars[index]);
});

//update car
router.put('/cars/:id', (req, res) => {
  const id = req.params.id;
  const updatedCar = req.body;
  const index = cars.findIndex(car => car.id === id);
  cars[index] = updatedCar;
  res.json(updatedCar);
});

//delete car
router.delete('/cars/:id', (req, res) => {
  const id = req.params.id;
  const index = cars.findIndex(car => car.id === id);
  cars.splice(index, 1);
  res.json({ message: `Car with id ${id} deleted` });
});

//add car
router.post('/cars', (req, res) => {
  let carw=req.body.one;
  let c={
    make:carw.make,
    model:carw.model,
    year:carw.year,
    price:carw.price,
    id:next_ind
  };
  next_ind++;
  cars.push(c);
  
  res.json(newCar);
});



module.exports = router;
