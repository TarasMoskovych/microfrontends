#!/bin/bash

TMP_WORKDIR=dist/purple-ui/
CONFIG_ENV_FILE=${TMP_WORKDIR}assets/config/remotes.prod.json
CONFIG_OUT_FILE=${TMP_WORKDIR}assets/config/remotes.json

if [[ -e $CONFIG_ENV_FILE ]]; then
  echo "Using prod app-config at ${CONFIG_ENV_FILE}"
  cp ${CONFIG_ENV_FILE} ${CONFIG_OUT_FILE}
else
  echo "No appropriate env config file found for '${ENVIRONMENT}' (expecting ${CONFIG_ENV_FILE})"
  exit 1
fi
