import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@uportal/home",
  app: () => System.import("@uportal/home"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@uportal/tasks",
  app: () => System.import("@uportal/tasks"),
  activeWhen: ["/tasks"],
});

start({
  urlRerouteOnly: true,
});
