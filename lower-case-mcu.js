import {Node} from "nodered";

class LowerCaseNode extends Node {
/*
	onStart(config) {
		super.onStart(config);
		// additional initialization
	}
*/

	onMessage(msg, done) {
		msg.payload = msg.payload.toLowerCase();
		done();
		return msg;
	}

	static type = "lower-case";
	static {
		RED.nodes.registerType(this.type, this);
	}
}
