import YumekoClient from "../../classes/Client";
import AmazedCommand from "./Amazed";

export default class Laugh extends AmazedCommand {
    public constructor(client: YumekoClient) {
        super(client, "laugh");
    }
}
