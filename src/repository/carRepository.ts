import {database} from "../config/database.js";

async function getCars() {
  const data = await database.cars.findMany()
  return data;
}

async function getCar(id: number) {
    const data = await database.cars.findUnique({
      where: {
        id
      }
    })
  return data
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = await database.cars.findUnique({
    where: { 
      licensePlate
    }
  }) 

  return data
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  await database.cars.create({
    data:{
      model,
      licensePlate,
      year,
      color
    }
  })
}

async function deleteCar(id: number) {
 await database.cars.delete({
  where: {
    id
  }
 })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;