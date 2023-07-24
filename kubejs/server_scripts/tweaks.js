ServerEvents.recipes(event => {
  event.shapeless(Item.of('minecraft:pointed_dripstone', 4), ['minecraft:dripstone_block'])
})

ServerEvents.tags('item', event => {
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
