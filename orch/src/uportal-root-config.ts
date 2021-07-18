import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@uportal/navbar",
  app: () => System.import("@uportal/navbar"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
