var env = process.env;

module.exports = {
    server: {
        protocol: "http",
        host: "localhost:8082"
    },
    github: {
        key: env.GITHUB_CLIENT_ID, //'CLIENT_ID'
        secret: env.GITHUB_CLIENT_SECRET, //'CLIENT_SECRET'
        callback: '/handle_github_callback',
        scope: [
            "user",
            "repo",
            "email"
        ]
    },
    facebook: {
        key: env.FACEBOOK_APP_ID, //'[APP_ID]'
        secret: env.FACEBOOK_APP_SECRET, //'[APP_SECRET]'
        callback: '/handle_facebook_callback',
        scope: [
            
        ]
    }
}