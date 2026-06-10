
const { Log } =
  require("./logger");

async function run() {

  await Log(
    "backend",
    "info",
    "service",
    "Notification service started"
  );

  await Log(
    "backend",
    "warn",
    "cache",
    "Cache miss for student 1042"
  );

  await Log(
    "backend",
    "error",
    "handler",
    "received string, expected bool"
  );

  await Log(
    "backend",
    "fatal",
    "db",
    "Critical database connection failure"
  );
}

run();
