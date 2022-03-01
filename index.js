#!/usr/bin/env node

/*
MIT License

Copyright (c) 2022 sue-woo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')



const AREA_CODE = 0     //e.g. 0113
const AREA_NAME = 1     //e.g. Leeds
const START_RANGE = 2   //e.g. 4960000
const END_RANGE = 3     //e.g. 4960999

var area_codes = [
    ['0113', 'Leeds', '4960000', '4960999'], 
    ['0114', 'Sheffield', '4960000', '4960999'],
    ['0115', 'Nottingham', '4960000', '4960999'],
    ['0116', 'Leicester', '4960000', '4960999'],
    ['0117', 'Bristol', '4960000', '4960999'],
    ['0118', 'Reading', '4960000', '4960999'],
    ['0121', 'Birmingham', '4960000', '4960999'],
    ['0131', 'Edinburgh', '4960000', '4960999'],
    ['0141', 'Glasgow', '4960000', '4960999'],
    ['0151', 'Liverpool', '4960000', '4960999'],
    ['0161', 'Manchester', '4960000', '4960999'],
    ['020', 'London', '79460000', '79460999'],
    ['0191', 'Tyneside/Durham/Sunderland', '4980000', '4980999'],
    ['028', 'Northern Ireland ', '96496000 ', '96496999'],
    ['029', 'Cardiff', '20180000', '20180999'],
    ['01632', 'No area', '960000', '960999']
]

var mobile = ['07700', 'Mobile', '900000', '900999']
var freephone = ['08081', 'Freephone', '570000', '570999']
var premium = ['0909', 'Premium rate services', '8790000', '8790999']
var uk = ['03069', 'UK-wide', '990000', '990999']


var help = ""
yargs(hideBin(process.argv))   


    


    // list-areas
    .command(
        'list-areas',
        'List area codes that can be used for fake numbers.',
        function (argv) {
            
            console.log("Ofcom has allocated the following geographic area codes")
            console.log("for use in TV and radio. These area codes can be used for")
            console.log("fake numbers. 1000 fake numbers are available in each of.")
            console.log("each of these area code ranges.")
            console.log()
            area_codes.forEach(element => {               
                console.log(`  ${element[AREA_CODE]}\t${element[AREA_NAME]}`)
            })

            console.log()
            process.exit(0)
        }        
    )    


    // generate command
    .command(
        'generate [area]',
        'Generate random fake phone number.',
        
        function (yargs) {
            return yargs.positional('area', {
                description: 'Area code for the fake phone number with area code.',
                default: '01632',
                choices: ['0113', '0114', '0115', '0116', '0117', '0118', '0121',
                    '0131', '0141', '0151', '0161', '020', '0191', '028', '029', '01632']
            })
        },
        
        // Run command here
        function (argv) {
            var area_code = area_codes.find(element => { return element[AREA_CODE] == argv.area })
            console.log(`  ${area_code[AREA_CODE]} ${random(parseInt(area_code[START_RANGE]), parseInt(area_code[END_RANGE]))}`)
            process.exit(0)
        }
    )

    
    // generate-mobile command
    .command(
        'generate-mobile',
        'Generate fake mobile number.',
        function (argv) {
            let phone_number = `${mobile[AREA_CODE]} ${random(parseInt(mobile[START_RANGE]), parseInt(mobile[END_RANGE]))}`
            console.log(`  ${phone_number}`)
            process.exit(0)
        }
    )


    // generate-freephone command
    .command(
        'generate-freephone',
        'Generate fake freephone number.',
        function (argv) {
            let phone_number = `${freephone[AREA_CODE]} ${random(parseInt(freephone[START_RANGE]), parseInt(freephone[END_RANGE]))}`
            console.log(`  ${phone_number}`)
            process.exit(0)
        }
    )


    // generate-premium command
    .command(
        'generate-premium',
        'Generate fake premium rate number.',
        function (argv) {
            let phone_number = `${premium[AREA_CODE]} ${random(parseInt(premium[START_RANGE]), parseInt(premium[END_RANGE]))}`
            console.log(`  ${phone_number}`)
            process.exit(0)
        }
    )


    // generate-uk-wide command
    .command(
        'generate-uk-wide',
        'Generate fake UK wide number.',
        function (argv) {
            let phone_number = `${uk[AREA_CODE]} ${random(parseInt(uk[START_RANGE]), parseInt(uk[END_RANGE]))}`
            console.log(`  ${phone_number}`)
            process.exit(0)
        }
    )


    // check command
    .command(
        'check [number]',
        'Check if a phone number is fake.',

        function (yargs) {
            return yargs.positional('number', {
                description: 'Phone number to check.',
                type: 'string'
            })
        },
        
        // Run command here
        function (argv) {
            console.log("TODO: check if number " + argv.number + " is fake.")
            process.exit(0)
        }
    )




    .example([
        ['$0 generate 0117', 'Generate a random phone number starting with a Bristol area code (0117).'],
        ['$0 generate-mobile', 'Generate a random mobile number starting with 07700.'],
        ['$0 check 01174960359', 'Check the phone number to see if it is a fake number.']
     ])


    .epilogue('for more information about fake TV and radio numbers, visit https://www.ofcom.org.uk/')

    .help()
    .argv



function random(min, max) {
    var range = []
    for (let i = min; i <= max; i++) { range.push(i) }
    return range[Math.floor(Math.random()*range.length)]
}

