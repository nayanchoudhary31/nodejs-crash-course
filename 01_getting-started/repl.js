const repl = require('repl');
const local = repl.start("->");
/**
 *  READ EVALUATE PRINT LOOP
 */
local.on("exit", () => {
    console.log(`Closing the REPL.....`);
    process.exit(0);
})