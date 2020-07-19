import YumekoClient from "../../classes/Client";
import AmazedCommand from "./Amazed";

export default class Feed extends AmazedCommand {
    public constructor(client: YumekoClient) {
        super(client, "feed");
    }
}
