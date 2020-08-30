const Base = require("inquirer/lib/prompts/base");

module.exports = (Inquirer) =>
    class extends Base {
        async run() {
            this.screen.render(" ");

            const loop = await Inquirer.prompt({
                type: "confirm",
                name: "loop",
                message: this.opt.message || "Would you like to loop?",
                default: true,
            });

            if (loop.loop) {
                return [
                    await Inquirer.prompt(this.opt.questions),
                    ...(await this.run()),
                ];
            } else {
                return [];
            }
        }
    };
