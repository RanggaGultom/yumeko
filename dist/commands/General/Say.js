"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("@yumeko/classes/Command"));
const decorators_1 = require("@yumeko/decorators");
let SayCommand = class SayCommand extends Command_1.default {
    exec(msg, { text, isDelete }) {
        if (isDelete)
            msg.delete().catch();
        return msg.ctx.send(text);
    }
};
SayCommand = __decorate([
    decorators_1.DeclareCommand("say", {
        aliases: ["say"],
        description: {
            content: "Let me repeat what you want",
            usage: "say <text> [--delete]",
            examples: ["say salam"]
        },
        category: "general",
        args: [
            {
                identifier: "isDelete",
                match: "flag",
                flag: "delete"
            },
            {
                identifier: "text",
                type: "string",
                match: "rest",
                prompt: "What text do you want me to repeaat ?"
            }
        ]
    })
], SayCommand);
exports.default = SayCommand;