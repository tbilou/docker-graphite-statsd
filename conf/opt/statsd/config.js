{
  graphiteHost: "127.0.0.1",
  graphitePort: 2003,
  servers: [
     { server: "./servers/tcp", port: 8125 }
   ],
  backends: ["./backends/graphite"],
  flushInterval: 10000,
  deleteIdleStats: true
}


