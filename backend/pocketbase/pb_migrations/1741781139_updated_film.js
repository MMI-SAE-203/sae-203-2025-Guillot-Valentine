/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "select794262873",
    "maxSelect": 1,
    "name": "lieu",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Grand Chapiteau",
      "Amphithéâtre Nature"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // remove field
  collection.fields.removeById("select794262873")

  return app.save(collection)
})
