import chalk from 'chalk';

const log = console.log;

log(chalk.red.bold("Lorem ipsum dolor sit amet, ") + chalk.redBright.dim("consectetur adipiscing elit."));
log(chalk.green.inverse("Sed ac metus vel enim ") + chalk.blackBright.inverse("fermentum finibus id in leo."));
log(chalk.yellow.underline("Curabitur lobortis risus ") + chalk.yellowBright.overline("at pharetra accumsan."));
log(chalk.blue.strikethrough("Morbi porta felis sed ") + chalk.blueBright.strikethrough("placerat pellentesque."));
log(chalk.magenta.italic("Fusce ac est vel ") + chalk.magentaBright("metus semper tempus."));
log(chalk.cyan("Praesent quis ex in ") + chalk.cyanBright("risus maximus convallis."));
log(chalk.white.bgBlack("Aenean ultrices quam ") + chalk.whiteBright.bgBlack("ac elit interdum sodales."));