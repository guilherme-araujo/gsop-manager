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
    '7617b668-5bbf-4cc7-98ae-c2bc88d8d647': {
      name: 'Main Simulation v3',
      descr: 'Runs the main simulation based on graphs',
      binaryPath: '/data/home/gfaraujo/gsopBundle/gsopv3',
    },
    '8b22df63-8ce5-4e5d-b858-27c62678c6d1': {
      name: 'Main Simulation v2',
      descr: 'Runs the main simulation based on graphs',
      binaryPath: '/data/home/gfaraujo/gsopBundle/gsopv2',
    },
    '7048c98e-dfbd-4832-a8c4-d6c7e2aa604f': {
      name: 'Main Simulation',
      descr: 'Runs the main simulation based on graphs',
      binaryPath: '/data/home/gfaraujo/gsopBundle/gsop',
    },
    'cdb92e18-7b53-453f-85f7-d965253b171f': {
      name: 'Test script',
      descr: 'A script that runs for testing purposes only.',
      file: 'A script that runs for testing purposes only.',
    },
    'ca08471f-1381-4bfb-baf6-b4d8f306409f': {
      name: 'eteetet',
      descr: 'gfdgfdgfdgdf',
      file: 'gfdgfdgfdgdf',
    },
    'c8c29b23-c3db-486d-8929-c87f7bc2da98': {
      name: 'gfdgfdg',
      descr: 'gfdgfdg',
      file: 'gfdgfdg',
    },
    'ddde7960-7421-47f8-9bf9-70fcd68d590d': {
      name: 'asddsad',
      descr: 'hjhgjghj',
      binaryPath: 'hjhgjghj',
    },
    '1a31e38a-08dd-44a5-90a5-bc3edb904cd2': {
      name: 'pppp',
      descr: 'oooo',
      binaryPath: 'nnn',
    },
    'c92455c8-5d77-49e0-a38a-6c5226bdab4c': {
      name: 'plot for figure 4',
      descr: 'Testing with data ready from figure4',
      binaryPath: 'python /home/gfaraujo/testdata/figure-4b/lineplot-4b.py',
    },
  })
)
