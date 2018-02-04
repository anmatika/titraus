const chalk = require('chalk');

function calculate({ mlBottle, mgPills, mgTarget }) {
  return mlBottle / mgPills * mgTarget;
}
function print({ mlBottle, mgPills, mgTarget }) {
  const mlToDrink = calculate({ mlBottle, mgPills, mgTarget });

  console.log(`${chalk.gray('Drink')} ${chalk.green(mlToDrink)} ml to get ${mgTarget} mg of med`);
}

module.exports.print = print;
module.exports.calculate = calculate;
