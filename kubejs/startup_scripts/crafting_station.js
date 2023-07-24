// priority: 0
const Workbench       = Java.loadClass('net.minecraft.world.level.block.CraftingTableBlock')
const Blocks          = Java.loadClass('net.minecraft.world.level.block.Blocks')
const BlockProperties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
const BlockItem       = Java.loadClass('net.minecraft.world.item.BlockItem')
const ItemProperties  = Java.loadClass('net.minecraft.world.item.Item$Properties')

let CraftingStation
const CSProps = new BlockProperties.copy(Blocks.CRAFTING_TABLE)
CSProps.canOcclude = false

StartupEvents.registry('block', event => {
	CraftingStation = event.custom('crafting_station', new Workbench(CSProps))
})

StartupEvents.registry('item', event => {
  event.createCustom('crafting_station', () => new BlockItem(CraftingStation.get(), new ItemProperties()))

})

