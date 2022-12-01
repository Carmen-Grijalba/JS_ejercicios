import chalk from 'chalk';
import * as moduloMatematicas from './controller.js'

const multiplicación = moduloMatematicas.multiplica((moduloMatematicas.suma(1,2)), (moduloMatematicas.suma(4,5)))

console.log(chalk.green(multiplicación))
