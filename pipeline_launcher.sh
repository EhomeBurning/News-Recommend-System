#!/bin/bash
# service redis_6379 start
# service mongod start
#
# pip3 install -r requirements.txt

cd data_pipeline
cd core

python3 monitor.py &
python3 fetcher.py &
python3 deduper.py &

echo "=================================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES." PRESSKEY

kill $(jobs -p)
