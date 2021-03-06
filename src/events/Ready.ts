import type YumekoClient from "@yumeko/classes/Client";
import { Event } from "@yumeko/interfaces";
import { stripIndents } from "common-tags";

const presences = require("../../assets/json/presence.json");

export default class ReadyEvent implements Event {
    public readonly listener = "ready";
    public constructor(public readonly client: YumekoClient) {}
    public exec (): void {
        this.client.log.info(stripIndents`
            ${this.client.log.color(this.client.user!.tag, "FFFFFF")} is Ready to play. ${this.client.shard ? this.client.shard.ids.map(x => this.client.log.color(`#${x + 1}`, "00FFFF")).join(", ") : ""}
        `);
        this.client.lavalink.userID = this.client.user!.id;
        presence.call(null, this.client);
        setInterval(presence.bind(null, this.client), 60000);
    }
}

function presence(client: YumekoClient): void {
    const { name, type, status } = presences[Math.round(Math.random()*presences.length)] || presences[0];
    client.user!.setPresence({
        status, activity: {
            name: name.replace(/\user/g, client.user!.username)
                .replace(/prefix/g, client.config.prefix)
                .replace(/listenmoe/g, client.nowplayMoe.jpop.data ? client.nowplayMoe.jpop.data.title : "LISTEN.moe")
                .replace(/shard:(id|count)/g, (_: string, type: string) => client.shard ? (type === "id" ? client.shard.ids.map(x => x + 1).join(", ") : client.shard.count) : 1),
            type
        }
    });
}