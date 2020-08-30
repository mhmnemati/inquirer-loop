const Base = require("inquirer/lib/prompts/base");
const Inquirer = require("inquirer");

module.exports = class extends Base {
    async _run() {
        const loop = await Inquirer.prompt({
            type: "confirm",
            name: "loop",
            message: this.opt.message || "Would you like to loop?",
            default: true,
        });

        if (loop.loop) {
            return [
                await this.prompt(this.opt.questions),
                ...(await this._promptLoop(message, questions)),
            ];
        } else {
            return [];
        }
    }
};
