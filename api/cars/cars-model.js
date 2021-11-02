const db= require('../../data/db-config')

//getAll resolves to an array of car records (or an empty array)
const getAll = () => {
  return db('cars')
}
//getById resolves to a car record by the given id
const getById = (id) => {
  return db('cars').where('id',id).first()
}
const getByVin=(vin)=> {
  return db('cars').where('vin',vin).first()
}
//create resolves to the newly created car record
const create = (car) => {
  return db('cars').insert(car)
    .then(([id])  => {
      return getById(id)
    })
}
module.exports={
  getAll,
  getById,
  getByVin,
  create,

}
