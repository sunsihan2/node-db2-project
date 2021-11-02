const cars =[
    {
        vin:'JH4DA9470MS008988',
        make: 'toyota',
        model:'prius',
        mileage: 215000,
        title:'clean',
        transmission: 'manual',
    },
    {
        vin:'JHMZA2H4XDT000050',
        make: 'toyota',
        model:'corolla',
        mileage: 115000,
        title:'salvage',
    },
    {
        vin:'4T1BF3EK5BU638805',
        make: 'ford',
        model:'focus',
        mileage: 15000,
    },
]
exports.seed = async function (knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}