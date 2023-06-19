import { override } from 'customize-cra';
import { aliasDangerous, configPaths } from 'react-app-rewire-alias/lib/aliasDangerous';


module.exports = {
	webpack: override(
		aliasDangerous(configPaths('./tsconfig.paths.json'))
	),
};