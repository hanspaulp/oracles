#!/bin/sh

shouldWeRunTheCode=1

while (( shouldWeRunTheCode >= 1 ));
do
    node update-weather-in-smart-contract.js
    echo $shouldWeRunTheCode

    sleep 5

    shouldWeRunTheCode=$((shouldWeRunTheCode+1))
done