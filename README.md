# Inquirer Loop

![Package](https://img.shields.io/npm/v/inquirer-loop)
![Travis](https://img.shields.io/travis/ckoliber/inquirer-loop/master)
![GitHub](https://img.shields.io/github/license/ckoliber/inquirer-loop)

Inquirer **loop** prompt

---

## Installation

```sh
npm install --save inquirer-loop
```

## Usage

```js
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

inquirer.prompt({
    type: "loop",
    name: "items",
    message: "Add another item?",
    questions: [
        {
            type: "input",
            name: "key",
            message: "Enter item key",
        },
        {
            type: "input",
            name: "value",
            message: "Enter item value",
        },
    ],
});
```

---

## License

This project is licensed under the [MIT license](LICENSE.md).  
Copyright (c) KoLiBer (koliberr136a1@gmail.com)
