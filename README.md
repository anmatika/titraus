# Calculates medicine in milliliters to be drank after titration

## Install

    npm i -g titraus

## Usage

    titraus [flags]

## Flags

    -h --help  output usage information
    -b --mlbottle  How much liquid in bottle in milliliters
    -p --mgpills  How much medicine in milligrams put into bottle
    -t --mgtarget How much medicine you want to take in milligrams

## USAGE examples:

    titraus --mlbottle 100 --mgpills 10 --mgtarget 0.9
    titraus -b 100 -p 10 -t 0.9
