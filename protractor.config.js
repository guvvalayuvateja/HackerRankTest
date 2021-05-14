
exports.config = {
    framework: "jasmine",
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ["./src/specs/*.spec.js"]
}