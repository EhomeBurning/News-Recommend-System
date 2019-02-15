import news_api_client as client

# bad url; 404 error; have not been tested
def basic_test():
    news = client.getNewsFromSource()
    print(news)
    assert len(news) > 0
    news = client.getNewsFromSource(sources = ["bbc-news"], sortBy = "top")
    assert len(news) > 0
    print(news)
    print("New Api Basic Test Complete!")

if __name__ == "__main__":
    basic_test()
