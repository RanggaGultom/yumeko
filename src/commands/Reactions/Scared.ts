import YumekoClient from "../../classes/Client";
import AmazedCommand from "./Amazed";

export default class Scared extends AmazedCommand {
    public constructor(client: YumekoClient) {
        super(client, "scared");
    }
}
