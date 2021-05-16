/*
ELCTRN
*/

class BiggerKeytool {
    constructor() {
        this.mod = "Revingly-BiggerKeytool";
        Logger.info(`Loading: ${this.mod}`);
        ModLoader.onLoad[this.mod] = this.Start.bind(this);
    }

    Start() {
        const database = DatabaseServer.tables;
        const items = database.templates.items;
		
		// change key tool container size
		items['59fafd4b86f7745ca07e1232']._props.Grids[0]._props.cellsH = 14;
		items['59fafd4b86f7745ca07e1232']._props.Grids[0]._props.cellsV = 14;
	}
}

module.exports.Mod = BiggerKeytool;