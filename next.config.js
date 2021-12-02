const withYAML = require('next-yaml')
const compose = require('next-compose')


module.exports = compose(
    [[withYAML],
    {
    webpack: (cfg) => {
    cfg.module.rules.push(
        {
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            options: { mode: ['react-component'] }
        }
    )
        return cfg;
}}
    ])