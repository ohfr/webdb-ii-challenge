
exports.seed = async function(knex) {
  await knex("car-dealer").truncate();
  await knex("car-dealer").insert([
    {VIN: "1HGBH41JXMN109186", make: "Ford", model: "Escort", mileage: "120,000", transmission: "Auto", title: "Clean"},
    {VIN: "5NMIVQ35GX25798576", make: "Infiniti", model: "G35", mileage: "170,000", transmission: "Manual", title: "Salvage"},
    {VIN: "2AMNRB20GX88108589", make: "Nissan", model: "GT-R", mileage: "20,000", transmission: "Manual", title: "clean"}
  ]);
};