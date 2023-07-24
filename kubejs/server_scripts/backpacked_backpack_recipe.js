// priority: 0

ServerEvents.recipes(event => {
  event.remove({ output: 'backpacked:backpack' })
  event.shaped("backpacked:backpack", [
      "WIW",
      "ICI",
      "WIW",
    ], {
      W: "#minecraft:wool",
      I: "minecraft:iron_ingot",
      C: "#c:wooden_chests",
    }
  )
})

