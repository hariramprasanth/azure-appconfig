const azureIdentity = require("@azure/identity");
const appConfig = require("@azure/app-configuration");

async function run() {
	const credential = new azureIdentity.DefaultAzureCredential();
	const client = new appConfig.AppConfigurationClient(
		"",
		credential
	);

	const appvalue = await client.getConfigurationSetting({ key: "Azure__Test__Key", label: "API" });
	console.log(appvalue.value);
}

run().catch(console.error);
