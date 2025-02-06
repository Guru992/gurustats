// strapi-api/config/database.js
module.exports = ({ env }) => {
  const query = env("DATABASE_URL");
  console.log({ query });
  const usernameStartIndex = query.indexOf("://") + 3;
  const usernameEndIndex = query.indexOf(":", usernameStartIndex);
  const username = query.substring(usernameStartIndex, usernameEndIndex);

  // Extract password
  const passwordStartIndex = query.indexOf(":", usernameEndIndex) + 1;
  const passwordEndIndex = query.indexOf("@");
  const password = query.substring(passwordStartIndex, passwordEndIndex);

  // Extract host
  const hostStartIndex = query.indexOf("@") + 1;
  const hostEndIndex = query.indexOf(":", passwordEndIndex);
  const host = query.substring(hostStartIndex, hostEndIndex);

  // Extract database name
  const dbNameStartIndex = query.lastIndexOf("/") + 1;
  const dbName = query.substring(dbNameStartIndex);

  // Extract port
  const portStartIndex = query.lastIndexOf(":") + 1;
  const portEndIndex = query.indexOf("/", portStartIndex);
  const port = query.substring(portStartIndex, portEndIndex);
  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port: port || 5432,
        database: dbName,
        user: username,
        password: password,
        schema: "",
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
        },
      },
      debug: false,
    },
  };
};
