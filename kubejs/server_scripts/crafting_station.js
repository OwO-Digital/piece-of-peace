// priority: 0

ServerEvents.recipes(event => {
  event.replaceInput({input: 'minecraft:crafting_table'},
    'minecraft:crafting_table',
    '#kubejs:workbench'
  )

  event.shapeless("kubejs:crafting_station", ["minecraft:crafting_table"])
  event.shapeless("minecraft:crafting_table", ["kubejs:crafting_station"])
})

ServerEvents.blockLootTables(event => {
  event.addSimpleBlock('kubejs:crafting_station')
})

ServerEvents.tags('item', event => {
  event.add('kubejs:workbench', 'kubejs:crafting_station')
  event.add('kubejs:workbench', 'minecraft:crafting_table')
  event.add('minecraft:logs_that_burn', '#colorfulazaleas:azalea_logs')
  event.add('minecraft:logs', '#minecraft:logs_that_burn')

  const logs = event.get('minecraft:logs').getObjectIds()
  const stripped = Ingredient.of(/.*stripped.*/)
  const log = Ingredient.of(/.*log.*/)
  const wood = Ingredient.of(/.*wood.*/)
  logs.forEach(item => {
    if (stripped.test(item)) {
      if (log.test(item))
        event.add('c:stripped_logs', item)
      else if (wood.test(item))
        event.add('c:stripped_wood', item)
    }
  })

})

ServerEvents.tags('block', event => {
  event.add('minecraft:mineable/axe', 'kubejs:crafting_station')
})
