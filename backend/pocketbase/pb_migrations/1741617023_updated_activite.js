/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2363381545",
    "max": 0,
    "min": 0,
    "name": "type",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select794262873",
    "maxSelect": 1,
    "name": "lieu",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "chapiteau",
      "g"
    ]
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4042354073",
    "hidden": false,
    "id": "relation3353481431",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4164619532")

  // remove field
  collection.fields.removeById("text2363381545")

  // remove field
  collection.fields.removeById("text1843675174")

  // remove field
  collection.fields.removeById("select794262873")

  // update field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4042354073",
    "hidden": false,
    "id": "relation3353481431",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
