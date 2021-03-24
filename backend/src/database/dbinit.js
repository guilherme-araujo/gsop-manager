const level = require('level')
const db = level('db/')

function dberr(err) {
  if (err) return console.log('Ooops!', err)
}

db.put('testdata', JSON.stringify({ msg: 'ok' }), dberr)

db.put(
  'simulationStatus',
  JSON.stringify({
    1: 'Pending',
    2: 'Started',
    3: 'Finished',
    4: 'Failed',
  })
)

//progs = db.get('programs')
//progs['c92455c8-5d77-49e0-a38a-6c5226bdab4c'] = {
//name: 'plot for figure 4',
// descr: 'Testing with data ready from figure4',
//binaryPath: 'python /home/gfaraujo/testdata/figure-4b/lineplot-4b.py',
//}
db.put(
  'programs',
  JSON.stringify({
    "9df3b0e4-c3da-411b-b7f3-4c1313cdecd7": {
      "name": "Graph generator",
      "descr": "Python script for generating graphs",
      "binaryPath": "/data/home/gfaraujo/gsop/main.py"
    },
    "98257ebc-d1c8-4df2-87a7-47fd46a3d916": {
      "name": "Main gsop simulation",
      "descr": "Main simulation program",
      "binaryPath": "/data/home/gfaraujo/gsop/gsop"
    },
    "63c6971f-92f3-485f-a411-e8cf8b17e865": {
      "name": "Gerador de gráfico tipo 1",
      "descr": "Gera gŕaficos barplot a partir dos dados da simulação",
      "binaryPath": "/data/home/gfaraujo/gsop/plot1.py"
    }
  })
)

db.put('parameters', JSON.stringify({
  "3bd857d9-3a1e-495c-a0e9-1ab6bb83fcd7": {
    "name": "Graph type",
    "descr": "Graph type for graph generator script",
    "program": "9df3b0e4-c3da-411b-b7f3-4c1313cdecd7",
    "param": "--graphType",
    "optional": false
  },
  "fcecd6df-e5da-47a9-b99f-96979d403d0d": {
    "name": "Operation",
    "descr": "Defines current operation of graph generation script",
    "program": "9df3b0e4-c3da-411b-b7f3-4c1313cdecd7",
    "param": "--operation",
    "optional": false
  }
}))

db.put('pipelines', JSON.stringify({
  "006f152a-71eb-44a9-9ab9-93a26847898b": {
    "name": "First pipeline example",
    "descr": "Generates graphs then runs a simulation.",
    "programs": {
      "1": "9df3b0e4-c3da-411b-b7f3-4c1313cdecd7",
      "2": "98257ebc-d1c8-4df2-87a7-47fd46a3d916"
    }
  }
}))

db.put('simulations', JSON.stringify({
  "d3936086-2d89-49a9-8c29-a28366c37a21": {
    "pipeline": "006f152a-71eb-44a9-9ab9-93a26847898b",
    "name": "First simulation",
    "descr": "This is the first simulation attempt.",
    "parametersByProgram": {
      "9df3b0e4-c3da-411b-b7f3-4c1313cdecd7": [
        {
          "parameter": "3bd857d9-3a1e-495c-a0e9-1ab6bb83fcd7",
          "value": "=ba"
        },
        {
          "parameter": "fcecd6df-e5da-47a9-b99f-96979d403d0d",
          "value": "=newGraph"
        }
      ]
    },
    "status": "1"
  }
}))
