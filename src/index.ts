import bigDecimal = require('js-big-decimal');
import Scratch = require('scratch-vm');
class BigDecimalExtension {
    getInfo() {
        return {
            id: 'bigdec', // change this if you make an actual extension!
            name: 'Big Decimal',
            color1: '#2196F3',
            color2: '#1e87db',
            blocks: [
                {
                    opcode: 'bool',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[STR]',
                    arguments: {
                        STR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1'
                        }
                    }
                }, {
                    opcode: 'comp',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] compareTo [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.2'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        }
                    }
                }, {
                    opcode: 'more',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] > [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.2'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        }
                    }
                }, {
                    opcode: 'less',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] < [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.2'
                        }
                    }
                }, {
                    opcode: 'add',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[ONE] + [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.2'
                        }
                    }
                }, {
                    opcode: 'subtract',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[ONE] - [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.8'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.2'
                        }
                    }
                }, {
                    opcode: 'multiply',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[ONE] * [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '6'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        }
                    }
                }, {
                    opcode: 'divide',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[ONE] / [TWO] precision [PRE]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '6'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        },
                        PRE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '16'
                        }
                    }
                }, {
                    opcode: 'modulus',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[ONE] % [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '6'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '4'
                        }
                    }
                }, {
                    opcode: 'negate',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '- [ONE]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        }
                    }
                }, {
                    opcode: 'ceil',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '↑ [ONE]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        }
                    }
                }, {
                    opcode: 'floor',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '↓ [ONE]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        }
                    }
                }, {
                    opcode: 'round',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'round [MODE] [ONE]',
                    arguments: {
                        MODE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '5',
                            menu: 'roundingMenu'
                        },
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        }
                    }
                }, {
                    opcode: 'round_pre',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'round [MODE] [ONE] precision [PRE]',
                    arguments: {
                        MODE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '5',
                            menu: 'roundingMenu'
                        },
                        PRE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '0'
                        },
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '0.1'
                        }
                    }
                }
            ],
            menus: {
                roundingMenu: {
                    acceptReporters: true,
                    items: [
                        {
                            text: "CEILING(0)",
                            value: 0
                        },
                        {
                            text: "DOWN(1)",
                            value: 1
                        },
                        {
                            text: "FLOOR(2)",
                            value: 2
                        },
                        {
                            text: "HALF_DOWN(3)",
                            value: 3
                        },
                        {
                            text: "HALF_EVEN(4)",
                            value: 4
                        },
                        {
                            text: "HALF_UP(5)",
                            value: 5
                        },
                        {
                            text: "UNNECESSARY(6)",
                            value: 6
                        },
                        {
                            text: "UP(7)",
                            value: 7
                        }
                    ],
                }
            }
        };
    }
    bool(args: any) {
        return args.STR;
    }
    add(args: any) {
        return bigDecimal.add(String(args.ONE), String(args.TWO));
    }
    subtract(args: any) {
        return bigDecimal.subtract(String(args.ONE), String(args.TWO));
    }
    multiply(args: any) {
        return bigDecimal.multiply(String(args.ONE), String(args.TWO));
    }
    divide(args: any) {
        return bigDecimal.divide(String(args.ONE), String(args.TWO), args.PRE);
    }
    modulus(args: any) {
        return bigDecimal.modulus(String(args.ONE), String(args.TWO));
    }
    comp(args: any) {
        return bigDecimal.compareTo(String(args.ONE), String(args.TWO));
    }
    more(args: any) {
        return bigDecimal.compareTo(String(args.ONE), String(args.TWO)) > 0;
    }
    less(args: any) {
        return bigDecimal.compareTo(String(args.ONE), String(args.TWO)) < 0;
    }
    negate(args: any) {
        return bigDecimal.negate(String(args.ONE));
    }
    ceil(args: any) {
        return bigDecimal.ceil(String(args.ONE));
    }
    floor(args: any) {
        return bigDecimal.floor(String(args.ONE));
    }
    round(args: any) {
        return bigDecimal.round(String(args.ONE), undefined, args.MODE);
    }
    round_pre(args: any) {
        return bigDecimal.round(String(args.ONE), args.PRE, args.MODE);
    }
}
Scratch.extensions.register(new BigDecimalExtension());