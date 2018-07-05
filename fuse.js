// var fusebox = require('fuse-box');
// const FuseBox = fusebox.FuseBox;
// const JSONPlugin = fusebox.JSONPlugin;
const { FuseBox, JSONPlugin, QuantumPlugin, Banner } = require('fuse-box');

const functionName = 'demo';

const fuse = FuseBox.init({
    //log: { enabled: false },
    homeDir : 'src',
    target : 'server@es2016',
    output : 'lib/$name.js',
    //sourceMaps: true,
    globals: { default: '*' },
    // useJsNext: true,
    // overrideExtensions: ['.js', '.json'],
    // useTypescriptCompiler: true,
    // allowSyntheticDefaultImports: true,
    filterFile: file => {
        return !['@google-cloud/datastore'].includes(file.collection.name);
    },
    plugins : [
        // Banner('require(\'source-map-support\').install();'),
//Doesn't like versioning of @google-cloud/common
//         QuantumPlugin({
//             target: 'server',
//             bakeApiIntoBundle: functionName,
//             containedAPI: true
//             // treeshake: true
//         }),
        JSONPlugin()
    ]
});
fuse.bundle(functionName).instructions('> gcf/' + functionName + '.ts');
fuse.run();
