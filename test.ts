// datasets
datasets.prepare()
datasets.dataset3()
datasets.dataset2()
datasets.dataset1()
datasets.data3()
datasets.data2()
datasets.data1()
datasets.onEvent(datasetType.historical, function() {
})

// Input
Input.videoFeed()
Input.distanceSensor()
Input.waterquality()
Input.groundSensor()
Input.weatherSatelite()
Input.Arialphotos()
Input.photos()

//AI
AI.plantingLocation()
AI.differences()
AI.pollution()
AI.train()
AI.compare2(0)
AI.compare1(0, 0)
AI.goal()
AI.action(actionML.classify)
AI.compare(datasetType.historical, datasetType.historical)
AI.onEvent2(ML.supervised, datasetType.historical, function() {
})
AI.onEvent1(ML.supervised, function() {
})
AI.onEvent(ML.supervised, function() {
})