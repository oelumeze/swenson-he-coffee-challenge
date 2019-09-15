import fs, { readFileSync } from 'fs';

var coffeePods = []
export const getCoffeePodsData = () => {
    try {
        let data = readFileSync(process.cwd() + '/src/preloaders/testData/coffeePods.txt', 'utf8')
        let lines =  data.split(/\r?\n/)
        lines.map((items) => {
            let newString = items.replace(',', ':')
            let itemNumber = items.substring(0,5)
            let product_type = items.substring(8, newString.indexOf(':'))
            let extractedPackSize = newString.substring(newString.lastIndexOf(':'), newString.indexOf(','))
            let pack_size = extractedPackSize.slice(2);
            let coffee_flavor = newString.substring(newString.lastIndexOf(',')).slice(1).trim()
            coffeePods.push({
                itemNumber,
                product_type,
                pack_size,
                coffee_flavor
            })
        })
        return coffeePods;
    } catch (ex) {
        console.log("error", ex)
    }
}


