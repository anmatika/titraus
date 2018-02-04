const dashdash = require('dashdash');

const output = require('./outputter');

function getCommandlineOptions() {
  const options = [
    { name: 'mgpills', type: 'number' },
    { name: 'p', type: 'number' },
    { name: 'mlbottle', type: 'number' },
    { name: 'b', type: 'number' },
    { name: 'mgtarget', type: 'number' },
    { name: 't', type: 'number' },
    { name: 'help', type: 'bool' },
    { name: 'h', type: 'bool' },
  ];
  const opts = dashdash.parse({ options });
  return opts;
}

function print(opts) {
  if (opts.help || opts.h) {
    console.log(`Usage: titraus [flags]\n\n
    Options:\n\n
    -h --help  output usage information\n
    -b --mlbottle  How much liquid in bottle in milliliters\n
    -p --mgpills  How much medicine in milligrams put into bottle\n
    -t --mgtarget How much medicine you want to take in milligrams\n\n
    Examples:\n\n 
    titraus --mlbottle 100 --mgpills 10 --mgtarget 0.9\n
    titraus -b 100 -p 10 -t 0.9\n\n`);
    return;
  }

  output.print({
    mlBottle: opts.mlbottle || opts.b,
    mgPills: opts.mgpills || opts.p,
    mgTarget: opts.mgtarget || opts.t,
  });
}

const opts = getCommandlineOptions();
print(opts);
