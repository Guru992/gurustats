

// For Development
module.exports = {
  host: "0.0.0.0",
  port: 1337,
  app: {
    keys: [
      "IDYqBEaZqdFH7KVo++iYwQ==",
      "8ZGkDqRL6VfO4SDUjf5BHQ==",
      "BQ8OhqxT5sNOPdsKGozFwA==",
      "5UwwOiK4+hPnZTWanpI7Gw==",
    ],
  },

  webhooks: {
    populateRelations: false,
  },
};

// For Production

// module.exports = {
//   url: "https://gurustats-cms-19b37544d65c.herokuapp.com/",
//   proxy: true,
//   app: {
//     keys: [
//       "IDYqBEaZqdFH7KVo++iYwQ==",
//       "8ZGkDqRL6VfO4SDUjf5BHQ==",
//       "BQ8OhqxT5sNOPdsKGozFwA==",
//       "5UwwOiK4+hPnZTWanpI7Gw==",
//     ],
//   },

//   webhooks: {
//     populateRelations: false,
//   },
// };
