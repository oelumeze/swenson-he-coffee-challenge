import fs from 'fs';

let coffeeMachineData = []
export const getCoffeeMachineData = () => {

    console.log(process.cwd())
    try {
        let data = fs.readFileSync(process.cwd() + '/src/utilities/coffeeMachines.txt', 'utf8');
        let lines = data.split(/\r?\n/)
        lines.map((items) => {
            let newString = items.replace(',', ':')
            let itemNumber = items.substring(0, 5)
            let product_type = items.substring(8, newString.indexOf(':'))
            let water_line_compatibility = items.substring(newString.lastIndexOf(',')).slice(2) === 'water line compatible' ? true : false
            coffeeMachineData.push({
                itemNumber,
                product_type,
                water_line_compatibility
            })
        })
        return coffeeMachineData
    } catch (e) {
        console.log("error", e)
    }

}