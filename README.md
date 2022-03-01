# fake-phone-number ☎️
Generate a random 'fake' phone number from Ofcom's list of numbers reserved for use in TV and radio dramas.

See the Ofcom website for more information, [Telephone numbers for use in TV and radio drama programmes](https://www.ofcom.org.uk/phones-telecoms-and-internet/information-for-industry/numbering/numbers-for-drama)

## Usage
```
fake-phone-number [command]

Commands:
  fake-phone-number list-areas          List area codes that can be used for
                                        fake numbers.
  fake-phone-number generate [area]     Generate random fake phone number.
  fake-phone-number generate-mobile     Generate fake mobile number.
  fake-phone-number generate-freephone  Generate fake freephone number.
  fake-phone-number generate-premium    Generate fake premium rate number.
  fake-phone-number generate-uk-wide    Generate fake UK wide number.
  fake-phone-number check [number]      Check if a phone number is fake.

Options:
  --version  Show version number                                       
  --help     Show help                                                 

Examples:
  fake-phone-number generate 0117      Generate a random phone number starting
                                       with a Bristol area code (0117).
  fake-phone-number generate-mobile    Generate a random mobile number starting
                                       with 07700.
  fake-phone-number check 01174960359  Check the phone number to see if it is a
                                       fake number.

for more information about fake TV and radio numbers, visit
https://www.ofcom.org.uk/

```
## Run
```
git clone https://github.com/sue-woo/fake-phone-number.git
cd fake-phone-number/
npm install
npm start -- --help
```
Or
```
git clone https://github.com/sue-woo/fake-phone-number.git
cd fake-phone-number/
echo 'install yargs' && npm install yargs
node fake-phone-number --help
```
