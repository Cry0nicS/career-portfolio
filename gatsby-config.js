/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
    siteMetadata: {
        title: "Adrian Popescu",
        description: "Career portfolio",
        author: "@Cry0nicS",
        siteUrl: "https://adrianpopescu.dev"
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            }
        },
        "gatsby-plugin-typescript",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                short_name: "starter",
                start_url: "/",
                display: "minimal-ui",
                icon: "src/images/elements.png" // This path is relative to the root of the site.
            }
        }
    ]
};
