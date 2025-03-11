/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "realisateur",
      "acteur",
      "animateur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 2,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "realisateur",
      "acteur",
      "jury"
    ]
  }))

  return app.save(collection)
})
