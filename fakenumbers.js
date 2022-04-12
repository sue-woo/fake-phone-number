/*
MIT License
Copyright (c) sue-woo
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

const AREA_CODE = 0;    //e.g. 0113
const AREA_NAME = 1;    //e.g. Leeds
const START_RANGE = 2;  //e.g. 4960000
const END_RANGE = 3;    //e.g. 4960999

/* 
 Area codes and number ranges for fake numbers.
 */
const AREA_CODES = [
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
    ['01632', 'No area', '960000', '960999'],
    ['07700', 'Mobile', '900000', '900999'],
    ['08081', 'Freephone', '570000', '570999'],
    ['0909', 'Premium rate services', '8790000', '8790999'],
    ['03069', 'UK-wide', '990000', '990999']
]


/* 
 Function to generate a random fake phone number.
 */
function generateNumber() {


    var select = document.getElementById('areacode');
    var value = select.options[select.selectedIndex].value;


    /* 
     AREA_CODES is a multidimensional array.
     AREA_CODES[n] is a sub array for n area code. n is the selected value of areacode dropdown menu.
    */
    var phone_number = `${AREA_CODES[value][AREA_CODE]} ${random(parseInt(AREA_CODES[value][START_RANGE]), parseInt(AREA_CODES[value][END_RANGE]))}`;

    var element = document.getElementById('number');
    element.textContent = phone_number;

}


function random(min, max) {
    var range = []
    for (let i = min; i <= max; i++) { range.push(i) }
    return range[Math.floor(Math.random() * range.length)]
}

