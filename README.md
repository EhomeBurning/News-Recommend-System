# News-Recommend-System

## Required Packages
jsonrpclib-pelix
newspaper3k
numpy
pika
MongoDB pymongo
python-dateutil
redis
requests
scipy
sklearn <br>

## Data Pipeline

1. Monitor: Get the latest news URL from websites such as cnn, bbc-news, bbc-sport, bloomberg, techcrunch and so on. The latest news URLs will be sent to RabbitMQ and wait for the next step. This monitor script is built based on News API. Our monitor stop running every ten seconds to avoid being blocked. <br>
2. Fetcher: This fetcher part can receive news URLs from RabbitMQ and uses Newspaper3k to scrape the target website. Then fetcher script will store the contents that has been scraped into Redis. <br>
3. Deduper: Receive the news contents and filter the same contents based on NLP - TLITF. <br>

*Run Pipeline* <br>
chmod +x pipeline_launcher.sh <br>
sudo ./pipeline_launcher.sh <br>
hit enter to stop <br>
