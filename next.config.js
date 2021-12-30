const withYAML = require('next-yaml')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images');

const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)$/,
})
const repoName = 'DHRI-static'
const build = process.env.NODE_ENV === "production";
console.log(`Running in ${process.env.NODE_ENV} mode`);
process.env.NEXT_PUBLIC_GITHUB_ACTIONS = process.env.GITHUB_ACTIONS
const isGitHub = process.env.GITHUB_ACTIONS === "true";
console.log(`Running in ${isGitHub ? "GitHub Actions" : "local"} mode`);

const imagesConfig = function (build, isGitHub) {
    if (isGitHub) {
        return {
            path: '/' + repoName + '/',
            disableStaticImages: true,
        }
    }
    else if (build) {
        return {
            path: '/',
            disableStaticImages: true,
        }
    } else {
        return {
            disableStaticImages: true,
        }
    }
}

const nextConfig = {
    // reactStrictMode: true,
    trailingSlash: true,
    basePath: isGitHub ? '/' + repoName : '',
    assetPrefix: isGitHub ? '/' + repoName + '/' : '',
    images: imagesConfig(build, isGitHub),
}

module.exports = withPlugins([
    [withMDX],
    [withYAML],
    [optimizedImages,
        {
        },
    ],
],
    nextConfig)