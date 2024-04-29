const appConfig = require("@azure/app-configuration");

async function run() {
	const connection_string = "";
	const client = new appConfig.AppConfigurationClient(connection_string);
	const retrievedConfigSetting = await client.getConfigurationSetting({
		key: "",
	});
	const appvalue = client.getConfigurationSetting({ key: "" });
	console.log((await appvalue)._response.parsedBody);
}

run().catch(console.error);
