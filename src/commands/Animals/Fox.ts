import type YumekoClient from "@yumeko/classes/Client";
import BunnyCommand from "@yumeko/commands/Animals/Bunny";
import request from "node-superfetch";

export default class FoxCommand extends BunnyCommand {
    public constructor(client: YumekoClient) {
        super(client, "fox");
    }

    public async getImage(): Promise<string> {
        const { body }: any = await request.get("https://randomfox.ca/floof/");
        return body.image;
    }
}