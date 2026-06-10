
require("dotenv").config();
const axios = require("axios");

const {
  STACKS,
  LEVELS,
  PACKAGES
} = require("./constants");

async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {

    if (!STACKS.includes(stack)) {
      throw new Error(
        `Invalid stack: ${stack}`
      );
    }

    if (!LEVELS.includes(level)) {
      throw new Error(
        `Invalid level: ${level}`
      );
    }

    if (!PACKAGES.includes(packageName)) {
      throw new Error(
        `Invalid package: ${packageName}`
      );
    }

    const response =
      await axios.post(
        "http://4.224.186.213/evaluation-service/logs",
        {
          stack,
          level,
          package: packageName,
          message
        },
        {
          headers: {
            Authorization:
              `Bearer ${process.env.ACCESS_TOKEN}`,
            "Content-Type":
              "application/json"
          }
        }
      );

    return response.data;

  } catch (error) {

    console.error(
      "Logging Middleware Error:",
      error.message
    );

    return null;
  }
}

module.exports = {
  Log
};
