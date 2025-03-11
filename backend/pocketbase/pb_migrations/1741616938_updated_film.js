/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number3543264974",
    "max": null,
    "min": null,
    "name": "annee_sortie",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 1,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "documentaire",
      "animation"
    ]
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3683362393",
    "max": 0,
    "min": 0,
    "name": "liste_acteur",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2773080466")

  // remove field
  collection.fields.removeById("number3543264974")

  // remove field
  collection.fields.removeById("select2203071480")

  // remove field
  collection.fields.removeById("text3683362393")

  return app.save(collection)
})
