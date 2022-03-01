# fake-phone-number
Generate a random 'fake' phone number from Ofcom's list of numbers reserved for use in TV and radio dramas.

See the Ofcom website for more information, [Telephone numbers for use in TV and radio drama programmes](https://www.ofcom.org.uk/phones-telecoms-and-internet/information-for-industry/numbering/numbers-for-drama)

## Usage
```
index.js [command]

Commands:
  index.js list-areas          List area codes that can be used for fake
                               numbers.
  index.js generate [area]     Generate random fake phone number.
  index.js generate-mobile     Generate fake mobile number.
  index.js generate-freephone  Generate fake freephone number.
  index.js generate-premium    Generate fake premium rate number.
  index.js generate-uk-wide    Generate fake UK wide number.
  index.js check [number]      Check if a phone number is fake.

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

Examples:
  index.js generate 0117      Generate a random phone number starting with a
                              Bristol area code (0117).
  index.js generate-mobile    Generate a random mobile number starting with
                              07700.
  index.js check 01174960359  Check the phone number to see if it is a fake
                              number.

for more information about fake TV and radio numbers, visit
https://www.ofcom.org.uk/

```
## Run
```
git clone https://github.com/sue-woo/fake-phone-number.git
cd fake-phone-number/
node index.js --help
```
