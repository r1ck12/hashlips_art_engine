const basePath = process.cwd()
const { MODE } = require(`${basePath}/constants/blend_mode.js`)
const { NETWORK } = require(`${basePath}/constants/network.js`)

const network = NETWORK.sol

// General metadata for Ethereum
const namePrefix = 'Articulated Skully'
const description =
	'Deep in the metaverse is a collection of 5555 collectible articulated skeletons on the Solana blockchain.'

const solanaMetadata = {
	symbol: 'KULL',
	seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
	external_url: 'https://dskullys.com/',
	creators: [
		{
			address: '7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC',
			share: 100,
		},
	],
	collection: { name: 'dskullys', family: 'dskullys' },
}

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
	{
		growEditionSizeTo: 2,
		layersOrder: [
			{ name: 'Background Traits' },
			{ name: 'Back Traits' },
			{ name: 'Base' },
			{ name: 'Torso Traits' },
			{ name: 'Accessory Traits' },
			{ name: 'Eye Traits' },
			{ name: 'Through The Skull Traits' },
			{ name: 'Head Traits' },
			{ name: 'Tattoo Trait' },
			{ name: 'Mouth Traits' },
		],
	},
]

// Mapped traits based on an existing collection metadata (gen1 folder)
const traits_map = [
	{
		trait_type: 'Background Traits',
		elements: [
			{ gen1: 'Galaxy', gen2: 'Galaxy' },
			{ gen1: 'Grey Skulls', gen2: 'Grey Skulls' },
			{ gen1: 'Cream Ink Blot', gen2: 'Cream Ink Blot' },
			{ gen1: 'Rose Ink Blot', gen2: 'Rose Ink Blot' },
			{ gen1: 'Shattered Purple', gen2: 'Shattered Purple' },
			{ gen1: 'Shattered Green', gen2: 'Shattered Green' },
			{ gen1: 'Aqua Ink Blot', gen2: 'Aqua Ink Blot' },
			{ gen1: 'Grey Ink Blot', gen2: 'Grey Ink Blot' },
			{ gen1: 'Shattered Cream', gen2: 'Shattered Cream' },
			{ gen1: 'Shadow', gen2: 'Shadow' },
			{ gen1: 'Violet Ink Blot', gen2: 'Violet Ink Blot' },
			{ gen1: 'White Wash', gen2: 'White Wash' },
		],
	},
	{
		trait_type: 'Back Traits',
		elements: [
			{ gen1: "Kurt's Angel Wings", gen2: "Kurt's Angel Wings" },
			{ gen1: 'Octopus', gen2: 'Octopus' },
			{ gen1: 'Daggers', gen2: 'Daggers' },
			{ gen1: 'Snakes', gen2: 'Snakes' },
			{ gen1: 'Black Wings', gen2: 'Black Wings' },
			{ gen1: 'Mace', gen2: 'Mace' },
			{ gen1: "Tflo's Shaolin", gen2: "Tflo's Shaolin" },
			{ gen1: 'Double Shovels', gen2: 'Double Shovels' },
			{ gen1: 'Shotgun', gen2: 'Shotgun' },
			{ gen1: 'Double Tomahawks', gen2: 'Double Tomahawks' },
			{ gen1: 'Shovel', gen2: 'Shovel' },
			{ gen1: 'Double Skythes', gen2: 'Double Skythes' },
			{ gen1: 'Spears', gen2: 'Spears' },
			{ gen1: 'M4', gen2: 'M4' },
			{ gen1: 'None', gen2: 'None' },
		],
	},
	{
		trait_type: 'Base',
		elements: [{ gen1: 'DSkullt_base51', gen2: 'DSkullt_base51' }],
	},
	{
		trait_type: 'Torso Traits',
		elements: [
			{ gen1: 'Blue Skullys Shirt', gen2: 'Blue Skullys Shirt' },
			{ gen1: 'Gems', gen2: 'Gems' },
			{
				value: "There's A Method To The Madness Shirt",
				gen2: "There's A Method To The Madness Shirt",
			},
			{ gen1: "Wop's Bruce Lee Shirt", gen2: "Wop's Bruce Lee Shirt" },
			{ gen1: 'Candles', gen2: 'Candles' },
			{ gen1: 'Green Skullys Shirt', gen2: 'Green Skullys Shirt' },
			{
				value: 'Do Not Cross Caution Tape',
				gen2: 'Do Not Cross Caution Tape',
			},
			{ gen1: 'Worms', gen2: 'Worms' },
			{ gen1: 'Dragon Fly', gen2: 'Dragon Fly' },
			{ gen1: 'Sheer Robe', gen2: 'Sheer Robe' },
			{ gen1: 'Safety Pins', gen2: 'Safety Pins' },
			{ gen1: 'Black Skullys Shirt', gen2: 'Black Skullys Shirt' },
			{ gen1: 'Prison Suit', gen2: 'Prison Suit' },
			{ gen1: 'Noose', gen2: 'Noose' },
			{ gen1: 'Cockroaches', gen2: 'Cockroaches' },
			{ gen1: 'Pearls', gen2: 'Pearls' },
			{ gen1: 'Jack Skellington Suit', gen2: 'Jack Skellington Suit' },
			{ gen1: 'Skull Jacket', gen2: 'Skull Jacket' },
			{ gen1: 'Bow tie Suit', gen2: 'Bow tie Suit' },
			{ gen1: 'Thorns', gen2: 'Thorns' },
			{ gen1: "0li's Bird", gen2: "0li's Bird" },
			{ gen1: 'DSkullt_drwhite', gen2: 'DSkullt_drwhite' },
			{ gen1: 'Gold Chain', gen2: 'Gold Chain' },
			{ gen1: 'Purple Suit', gen2: 'Purple Suit' },
			{ gen1: 'Beatle Juice Suit', gen2: 'Beatle Juice Suit' },
			{ gen1: "Bella's Tree Thorns", gen2: "Bella's Tree Thorns" },
			{ gen1: 'Spiders', gen2: 'Spiders' },
			{ gen1: 'Centapedes', gen2: 'Centapedes' },
			{ gen1: 'None', gen2: 'None' },
		],
	},
	{
		trait_type: 'Accessory Traits',
		elements: [
			{ gen1: 'Nose Ring', gen2: 'Nose Ring' },
			{ gen1: 'Padlock', gen2: 'Padlock' },
			{ gen1: 'Snake', gen2: 'Snake' },
			{ gen1: 'Key', gen2: 'Key' },
			{ gen1: 'None', gen2: 'None' },
		],
	},
	{
		trait_type: 'Eye Traits',
		elements: [
			{ gen1: 'Orange Poolballs', gen2: 'Orange Poolballs' },
			{ gen1: 'Blue Poolballs', gen2: 'Blue Poolballs' },
			{ gen1: 'Gem Eye', gen2: 'Gem Eye' },
			{ gen1: 'Black Poolballs', gen2: 'Black Poolballs' },
			{ gen1: 'Bluechip', gen2: 'Bluechip' },
			{ gen1: 'Blue Crystals', gen2: 'Blue Crystals' },
			{ gen1: 'Gauze', gen2: 'Gauze' },
			{ gen1: 'Red Dice', gen2: 'Red Dice' },
			{ gen1: 'Double Red Crystals', gen2: 'Double Red Crystals' },
			{ gen1: 'Double Guaze', gen2: 'Double Guaze' },
			{ gen1: 'Eyepatch', gen2: 'Eyepatch' },
			{ gen1: 'Snake Eyes', gen2: 'Snake Eyes' },
			{ gen1: 'Hypno Eyes', gen2: 'Hypno Eyes' },
			{ gen1: 'Monocle', gen2: 'Monocle' },
			{ gen1: 'Hanging Eye', gen2: 'Hanging Eye' },
			{ gen1: 'Tree Eyes', gen2: 'Tree Eyes' },
			{ gen1: 'Black Glasses', gen2: 'Black Glasses' },
			{ gen1: 'Coins', gen2: 'Coins' },
			{ gen1: 'Maroon Glasses', gen2: 'Maroon Glasses' },
			{ gen1: 'Mushroom Eye', gen2: 'Mushroom Eye' },
			{ gen1: 'Blue Glasses', gen2: 'Blue Glasses' },
			{ gen1: 'Double Mushroom Eyes', gen2: 'Double Mushroom Eyes' },
			{ gen1: 'Fingers', gen2: 'Fingers' },
			{ gen1: 'None', gen2: 'None' },
		],
	},
	{
		trait_type: 'Through The Skull Traits',
		elements: [
			{ gen1: 'Rose', gen2: 'Rose' },
			{ gen1: 'Vampire Stake', gen2: 'Vampire Stake' },
			{ gen1: 'Roman Spike', gen2: 'Roman Spike' },
			{ gen1: 'Arrow', gen2: 'Arrow' },
			{ gen1: 'Dagger', gen2: 'Dagger' },
			{ gen1: 'None', gen2: 'None' },
		],
	},
	{
		trait_type: 'Head Traits',
		elements: [
			{ gen1: 'Jack in the box', gen2: 'Jack in the box' },
			{ gen1: 'Blue Bandana', gen2: 'Blue Bandana' },
			{ gen1: 'Tupac White Bandana', gen2: 'Tupac White Bandana' },
			{ gen1: 'Black Beanie', gen2: 'Black Beanie' },
			{ gen1: 'Blue Beanie', gen2: 'Blue Beanie' },
			{ gen1: 'Purple Tupac Bandana', gen2: 'Purple Tupac Bandana' },
			{ gen1: 'Green Beanie', gen2: 'Green Beanie' },
			{ gen1: 'Pins', gen2: 'Pins' },
			{ gen1: 'Purple Bandana', gen2: 'Purple Bandana' },
			{ gen1: 'ZB Blue Mask', gen2: 'ZB Blue Mask' },
			{ gen1: 'White Bandana', gen2: 'White Bandana' },
			{ gen1: 'Grey Beanie', gen2: 'Grey Beanie' },
			{ gen1: 'Red Tupac Bandana', gen2: 'Red Tupac Bandana' },
			{ gen1: 'Yellow Bandana', gen2: 'Yellow Bandana' },
			{ gen1: 'Blue Tupac Bandana', gen2: 'Blue Tupac Bandana' },
			{ gen1: 'Solana Beanie', gen2: 'Solana Beanie' },
			{ gen1: 'Green Tupac Bandana', gen2: 'Green Tupac Bandana' },
			{ gen1: 'Ninja Star', gen2: 'Ninja Star' },
			{ gen1: 'Black Bandana', gen2: 'Black Bandana' },
			{ gen1: 'Red Bandana', gen2: 'Red Bandana' },
			{ gen1: 'Devil Thrown', gen2: 'Devil Thrown' },
			{ gen1: 'Cockroaches', gen2: 'Cockroaches' },
			{ gen1: 'Cross', gen2: 'Cross' },
			{ gen1: 'Butterfly', gen2: 'Butterfly' },
			{ gen1: 'Lightbulb', gen2: 'Lightbulb' },
			{ gen1: 'Metal Plate', gen2: 'Metal Plate' },
			{ gen1: 'Worms', gen2: 'Worms' },
			{
				value: "Eckzyle's Crown Of Thorns",
				gen2: "Eckzyle's Crown Of Thorns",
			},
			{ gen1: 'Tree Top', gen2: 'Tree Top' },
			{ gen1: 'Playing Card Dart', gen2: 'Playing Card Dart' },
			{ gen1: 'Spiders', gen2: 'Spiders' },
			{ gen1: 'Dark Cloud', gen2: 'Dark Cloud' },
			{ gen1: 'Caesar Crown', gen2: 'Caesar Crown' },
			{ gen1: 'Eye of Ra', gen2: 'Eye of Ra' },
			{ gen1: 'Centepides', gen2: 'Centepides' },
			{ gen1: 'Eel', gen2: 'Eel' },
			{ gen1: 'Mowhawk Horns', gen2: 'Mowhawk Horns' },
			{ gen1: 'Arrow', gen2: 'Arrow' },
			{ gen1: 'King thrown', gen2: 'King thrown' },
			{ gen1: 'Saw Disk', gen2: 'Saw Disk' },
			{ gen1: "Mami's Halo", gen2: "Mami's Halo" },
			{ gen1: 'Devil Horns', gen2: 'Devil Horns' },
			{ gen1: 'ZB Red Mask', gen2: 'ZB Red Mask' },
			{ gen1: 'None', gen2: 'None' },
		],
	},
	{
		trait_type: 'Tattoo Trait',
		elements: [
			{ gen1: '5555 Tattoo', gen2: '5555 Tattoo' },
			{ gen1: 'None', gen2: 'None' },
		],
	},
	{
		trait_type: 'Mouth Traits',
		elements: [
			{ gen1: "Fr3q's Joint", gen2: "Fr3q's Joint" },
			{ gen1: 'Stiches', gen2: 'Stiches' },
			{ gen1: 'Skull Pipe', gen2: 'Skull Pipe' },
			{ gen1: 'Dskullys Cigar', gen2: 'Dskullys Cigar' },
			{ gen1: 'BANG!', gen2: 'BANG!' },
			{ gen1: 'Bullet Tooth', gen2: 'Bullet Tooth' },
			{ gen1: 'Dskullys Cigarette', gen2: 'Dskullys Cigarette' },
			{ gen1: 'Gold Teeth', gen2: 'Gold Teeth' },
			{ gen1: 'DSkullt_fangs', gen2: 'DSkullt_fangs' },
			{ gen1: 'None', gen2: 'None' },
		],
	},
]

const shuffleLayerConfigurations = false

const debugLogs = false

const format = {
	width: 512,
	height: 512,
	smoothing: false,
}

const gif = {
	export: false,
	repeat: 0,
	quality: 100,
	delay: 500,
}

const text = {
	only: false,
	color: '#ffffff',
	size: 20,
	xGap: 40,
	yGap: 40,
	align: 'left',
	baseline: 'top',
	weight: 'regular',
	family: 'Courier',
	spacer: ' => ',
}

const pixelFormat = {
	ratio: 2 / 128,
}

const background = {
	generate: true,
	brightness: '80%',
	static: false,
	default: '#000000',
}

const extraMetadata = {}

const rarityDelimiter = '#'

const uniqueDnaTorrance = 10000

const preview = {
	thumbPerRow: 5,
	thumbWidth: 50,
	imageRatio: format.height / format.width,
	imageName: 'preview.png',
}

const preview_gif = {
	numberOfImages: 5,
	order: 'ASC', // ASC, DESC, MIXED
	repeat: 0,
	quality: 100,
	delay: 500,
	imageName: 'preview.gif',
}

module.exports = {
	format,
	description,
	background,
	uniqueDnaTorrance,
	layerConfigurations,
	rarityDelimiter,
	preview,
	shuffleLayerConfigurations,
	debugLogs,
	extraMetadata,
	pixelFormat,
	text,
	namePrefix,
	network,
	solanaMetadata,
	gif,
  preview_gif,
  traits_map
}
