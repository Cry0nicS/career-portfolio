// Configure environment variables.
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    siteMetadata: {
        author: "@Cry0nicS",
        description: "Career portfolio",
        image: "/images/korra.jpg",
        keywords:
            "career, engineer, developer, software, portofolio, reactjs, gatsbyjs, typescript",
        language: "en",
        siteUrl: "https://adrianpopescu.dev",
        social: {
            twitter: "@Cry0nicS"
        },
        title: "Adrian Popescu"
    },
    plugins: [
        "gatsby-plugin-scss-typescript",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: "gatsby-source-trello",
            options: {
                teamId: process.env.TRELLO_TEAM_ID,
                apiKey: process.env.TRELLO_API_KEY,
                secret: process.env.TRELLO_SECRET_KEY
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
