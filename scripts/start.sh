#!/usr/bin/env bash

commands=(
  'npm start --prefix ./orch'
  'npm start --prefix ./utils'
  'npm start --prefix ./navbar'
  'npm start --prefix ./footer'
  'npm start --prefix ./home'
  'npm start --prefix ./tasks'
  'npm start --prefix ./table'
)

################################################################################

pids=""

# Run concurrent processes
for command in "${commands[@]}"; do
  echo command is ${command}
  ( ${command} ) &
  pid=$!
  # store PID of process
  pids+=" ${pid}"
  echo "${pid}: Running: ${command}"
done

# Wait for all processes to finnish
for p in $pids; do
  if wait $p; then
    echo "Process $p succeeded."
  else
    echo "Process $p failed. Build aborted."
    echo "Killing any running concurrent commands."
    kill $pids &> /dev/null
    exit 1
  fi
done
