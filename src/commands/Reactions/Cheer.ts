import YumekoClient from "../../classes/Client";
import AmazedCommand from "./Amazed";

export default class Cheer extends AmazedCommand {
    public constructor(client: YumekoClient) {
        super(client, "cheer");
    }
}
