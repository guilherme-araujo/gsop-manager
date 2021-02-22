# Sample requests

Create requests tested with a local database.

## New parameter

http://localhost:3333/parameter

data:

```JSON
{
	"parameter" : {
		"name": "History of extended phenotypes",
		"descr": "Prints count of extended phenotypes for every cycle",
		"program": "b53578dd-5219-49b1-ba6c-9983cd2bfbe7",
		"param": "ephPopHistory",
		"optional": true
	}
}
```

## New program

http://localhost:3333/program

data:

```JSON
{
	"program": {
		"name": "Main Simulation v3",
		"descr": "Runs the main simulation based on graphs",
		"binaryPath": "/data/home/gfaraujo/gsopBundle/gsopv3"
	}
}
```


## New pipeline

http://localhost:3333/pipeline

data:

```JSON
{
	"pipeline": {
		"name": "First Test Pipeline",
		"descr": "This is a first pipeline just for testing purposes.",
		"programs": {
			"1": "29203172-dbe3-4bcf-8387-bcb962376743",
			"2": "b53578dd-5219-49b1-ba6c-9983cd2bfbe7"
		}
	}
}
```

## New simulation

http://localhost:3333/simulation

data:

```JSON
{
	"simulation": {
		"pipeline": "4128d417-b431-4f76-be5e-558bc1213770",
		"parameters": {
			"1": {
				"parameter": "51c28743-2ada-46c2-b6e0-6f7a0ccce4d9",
				"value": "1"
			}
		},
		"status": "1"
	}
}
```
