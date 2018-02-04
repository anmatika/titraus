// @flow
const chalk = require('chalk');

type Amounts = {
  mlBottle: number,
  mgPills: number,
  mgTarget: number,
};

function calculate({ mlBottle, mgPills, mgTarget }: Amounts) {
  return mlBottle / mgPills * mgTarget;
}
function print({ mlBottle, mgPills, mgTarget }: Amounts) {
  const mlToDrink = calculate({ mlBottle, mgPills, mgTarget });

  console.log(`${chalk.gray('Drink')} ${chalk.green(mlToDrink)} ml to get ${mgTarget} mg of med`);
}

module.exports.print = print;
module.exports.calculate = calculate;
