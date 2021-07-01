# kafka-producer

#### A hapijs Server that listens on http://localhost:3000 and puts the payload in a [Azure Event Hub for Kafka Instance](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-for-kafka-ecosystem-overview).
* Edit `XXXXXX.servicebus.windows.net:9093` to have *your* Event Hub name space
* Edit `Endpoint=sb://XXXXXX.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=XXXXXX` to have *your* connection string. 
