import YumekoClient from "@yumeko/classes/Client";
import AmazedCommand from "@yumeko/commands/Reactions/Amazed";

export default class Thumbsup extends AmazedCommand {
    public constructor(client: YumekoClient) {
        super(client, "thumbsup");
    }
}
