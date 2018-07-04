    if (typeof global === "object") {
        global.require = require;
    }
    var _1ec93687 = {};
    _1ec93687.f = {}
    // cached modules
    _1ec93687.m = {};
    _1ec93687.r = function(id) {
        var cached = _1ec93687.m[id];
        // resolve if in cache
        if (cached) {
            return cached.m.exports;
        }
        var file = _1ec93687.f[id];
        if (!file)
            return;
        cached = _1ec93687.m[id] = {};
        cached.exports = {};
        cached.m = { exports: cached.exports };
        file(cached.m, cached.exports);
        return cached.m.exports;
    };
// default/gcf/demo.js
_1ec93687.f[0] = function(module,exports){
function helloWorld(req, res) {
    if (req == undefined) {
        console.info('No request, probably testing');
    } else if (req.body.message === undefined) {
        res.status(400).send('No message defined!');
    } else {
        console.log(req.body.message);
        res.status(200).send('Success: ' + req.body.message);
    }
}
exports.helloWorld = helloWorld;
}
module.exports = _1ec93687.r(0)