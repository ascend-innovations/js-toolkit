module.exports = {
    ...require("./"),
    overrides: [
        {
            files: "*.svelte",
            options: {
                plugins: [ "prettier-plugin-svelte" ],
                ...require("./svelte"),
            }
        }
    ]
}
