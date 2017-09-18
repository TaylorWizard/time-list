#!/bin/bash

rm -rf node_modules && npm install && npm run prod
cp -R ./static ./dist
