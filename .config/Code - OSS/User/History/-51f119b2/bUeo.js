export const equipmentData = {
	hillElements: [
		{
			name: "Elevation",
			desc: "Maximum elevation above sea level of a peak."
		},
		{
			name: "Prominence",
			desc: "Vertical distance between the lowest point of elevation on the nearest drop which connects a peak to a higher peak, and the next, higher, peak."
		},
		{
			name: "Isolation",
			desc: "Horizontal distance between the peak and the next, higher, peak."
		}
	],
	routeElements: [
		{
			name: "Total Distance",
			desc: "The total sum of distance covered spanning the entire course of the route"
		},
		{
			name: "Total Elevation Gain",
			desc: "The total sum of elevation (height) gained spanning the entire course of the route."
		},
		{
			name: "Time/Duration",
			desc: "The total sum of time elapsed spanning the entire course of the route."
		},
		{
			name: "Standard Time/Duration",
			desc: "The total sum of time elapsed spanning the entire course of the route, taken by an athlete with an &lsquo;average&rsquo; fitness level."
		},
		{
			name: "Moving Time/Duration",
			desc: "The sum of time taken to complete segments of the route between stationary points (idling)."
		}
	],
	summitFeatures: [
		"Triangulation Station [Pillar (Square Hotine)]",
		"Triangulation Station [Pillar (Round Vanessa)]",
		"Triangulation Station [Pillar (Stonebuilt)]",
		"Triangulation Station [Block]",
		"Triangulation Station [Buried Block]",
		"Triangulation Station [Concrete Ring]",
		"Triangulation Station [Surface Block]",
		"Triangulation Station [Curry Stool]",
		"Triangulation Station [Bolt]",
		"Triangulation Station [Covered Bolt]",
		"Triangulation Station [Platform Bolt]",
		"Triangulation Station [Brass Plate]",
		"Triangulation Station [Cannon]",
		"Triangulation Station [Cut]",
		"Triangulation Station [Berntsen]",
		"Triangulation Station [Disc]",
		"Triangulation Station [Old-Style Rivet]",
		"Triangulation Station [New-Style Rivet]",
		"Triangulation Station [Fundamental Benchmark]",
		"GPS Station",
		"Weather Station",
		"Cairn",
	],
	walkTypes: [
		{
			name: "Walk",
			desc: "A low-level walk, usually under or between five-hundred-to-one-thousand-feet, generally consisting of non-varying terrain elevation and surface.",
		},
		{
			name: "Hillwalk",
			desc: "A walk which may lead up some sort of hill such as a Sub2000, Donald, Graham, Corbett or Munro that does not generally involve any challenging terrain where the participant is required to engage particular skills such as scrambling or climbing.",
		},
		{
			name: "Ridgewalk",
			desc: "Usually involves all elements of a hillwalk but a large portion or major feature of the route involves traverse across an ar&ecirc;te or prominent, usually rocky but not &lsquo;scrambly&rsquo;, ridge. This does not include plateau &lsquo;ridges&rsquo; which appear on most hills which aren&rsquo;t basic mounds.",
		},
		{
			name: "Scramble",
			desc: "Usually involves all elements of a hillwalk but a large portion of the route involves using human four wheel drive <i>quattro</i> to ascend more vertical, rocky features. These are generally categorized by rock type/surface and grade (an unnecessary, superficial term which defines new normie metrics for &lsquo;gradient&rsquo;).",
		},
		{
			name: "Climb",
			desc: "Can sometimes involve elements of a hillwalk although the type of athlete who is inclined to practice such a sport generally finds isolated climbing routes. They are more vertical (have a greater gradient) and consist of less featured rock formations than those found in scrambles. There are many different types of climbing which involve ropes and other specialist equipment on which information can be found on this site. Many people like to keep it simple though and just free solo.",
		}
	],
	walkStages: [
		{
			name: "Walk-In",
			desc: "Known as the pre-approach to either a hillwalk or climb etc., considering ridgewalks and scrambles tend not to exist as isolated activities and are generally included in hillwalks. Walk-ins are usually not part of official routes as they tend to join your point of origin with the start of the route. For example, you may walk 2 miles along a road from a car park to the first farm gate on your route, where you will start your approach. Hence, walk-ins often vary from athlete to athlete.",
		},
		{
			name: "Approach",
			desc: "The section of a route which often leads along some form of path to the start of the hill or feature. It may lead through forests, farms, fields, riversides, fords, etc. It may also involve some elevation gain but usually none as significant as that found when actually on your hill or feature.",
		},
		{
			name: "On-Hill",
			desc: "When you are clearly on a landmass or feature and making sharper elevation gain. For example, when you come to the end of a farm track road and take a sharp turn onto a smaller path, footpath erosion, etc., or any other form of route track. These changes are usually marked by a small cairn, even if the route is not popular.",
		},
		{
			name: "Walk-Out",
			desc: "This is often a repeat of the approach plus the walk-in but of course in the opposite direction. Unless you take a circular loop which bypasses part of the route already completed. For example, the end of The Cairnwell Nine takes you straight from on-hill to car park, but involves an approach from the car park to Beinn Number One when completing the anti-clockwise traverse.",
		}
	],
	terrainTypes: [
		{
			name: "Road",
			desc: "A piece of land which is primarily intended for road vehicles but appears either in the walk-in or approach stage of a route and is safe for pedestrians to walk on. Be sure to always adhere to basic road-walking etiquette if you find yourself in this position; walk on the right side of the road, facing oncoming vehicles. Move accordingly either to a right-side ditch or to the left side when clear. Do as I say, not as I do. I am Mr. <i>A82 Run-Out</i>.",
		},
		{
			name: "Forestry Commission Road",
			desc: "A more natural-looking stone or dirt road which leads through, you guessed it, forests and are used for service maintenance primarily. Expect to see plenty of Hiluxes and L200s here. These roads are often intermittently broken by cattle grids, if near or on farmland, and gates. Find more information <a href='https://docs.planning.org.uk/20210121/168/QN8R75CALSV00/3f03cq8ycvqy1h1p.pdf'>here</a>.",
		},
		{
			name: "Off-Road",
			desc: "The finest road type of all. It doesn&rsquo;t take some normie form of concrete, gravel or stone; this is a road which follows the surface and elevation of the terrain and is generally used for more remote access and late night joy rides. It can be useful for approaches as they often follow relevant hillsides and inclines but do skew off-route further down-the-line so look out for those small cairns. Also look out for me railing my Audi A6 C6 TDV allroad TDI quattro over the dunes. Human road kill is hard to explain.. and dispose of.",
		},
		{
			name: "Farm Path",
			desc: "As the name suggests, this form of road is very similar to a forestry commission one or something of the sort, except it is used by farmers and farmhouse owners for local access, service and maintenance around the farm. They are also frequently intermittently broken by cattle grids and farm gates. Look out for those Hiluxes and L200s.",
		},
		{
			name: "Tourist Path",
			desc: "A route surface, often constructed by the local community, council, or Mountaineering Scotland, which provides clear navigation and, usually, slightly &lsquo;easier&rsquo; terrain to walk on such as slabs, rocks and stones. They are most commonly found on very touristy hills, i.e. anything with the English prefixes &lsquo;Ben&rsquo; or &lsquo;Mount&rsquo;, and are generally hated by enthusiasts as they can slow you down torque-wise. They do however, help prevent footpath erosion.",
		},
		{
			name: "Path",
			desc: "The term &lsquo;path&rsquo; is often perceived horrifically incorrectly by normies. When NPCs living in the matrix hear this word, they expect some sort of red carpet all the way to the summit. However, the term really just refers to any consistent track which leads along the primary route. It could be slabs, rocks, stones, dirt, erosion, etc. which tend to occur more naturally simply due to the volume of hikers. A good example is inconsistently treaded heather on a 0.9 gradient hillside. Most normies think that is the furthest thing from a &lsquo;path:&rsquo; however, it may in fact be the primary route.",
		},
		{
			name: "Footpath Erosion",
			desc: "Erosion in the surface material, such as flattening of grass and heather or scars in rock, which has been made by frequent repetitions of the route by hikers when there is no other form of path. I&rsquo;d say try to avoid these as very severe examples such as deep scars are often very difficult to walk in, but then you&rsquo;re really just adding to the problem by creating more footpath erosion. Idk, if you care about that hippie nonsense then stay at home or go do something touristy.",
		},
		{
			name: "Stalkers Path",
			desc: "A form of footpath erosion made and used by stalkers when hunting deer. Don&rsquo;t be fooled by these paths, they are often mistaken for regular footpath erosion but very frequently end up leading athletes somewhere irrelevant or even far off the route.",
		},
		{
			name: "Shepherds Path",
			desc: "A form of footpath erosion made and used by shepherds to pass and gain leverage upon their flock of sheep when roundin&rsquo;-up, yee-haw. Don&rsquo;t be fooled by these paths, they are often mistaken for regular footpath erosion but very frequently end up leading athletes somewhere irrelevant or even far off the route.",
		},
		{
			name: "Sheep Path",
			desc: "As the name suggests, this footpath erosion has been formed by the regular passing of sheep. Don&rsquo;t be fooled by these paths, they are often mistaken for human footpath erosion but very frequently end up leading athletes somewhere irrelevant or even far off the route.",
		},
		{
			name: "Off-Path",
			desc: "You will usually find yourself on a real hill of there is no form of path or footpath erosion at all. Generally these hills are very remote or unpopular. For example, thirty miles deep into Knoydart, or some Sub2000 that no one has heard of 10 miles past Ben Hope. These are for true enthusiasts and of course involve walking on whatever terrain the hill provides.",
		}
	],
	terrainSurfaces: [
		"Grass",
		"Concrete",
		"Stone Staircase",
		"Broken Rock",
		"Grass with Scattered Rock",
		"Rocky Talus",
		"Talus (Coarse Scree)",
		"Scree (Fine Scree)",
		"Crag",
		"Crag, Grade 1 (Easy)",
		"Crag, Grade 2 (Moderate)",
		"Crag, Grade 3 (Challenging)",
		"Notched Slab",
		"Notched Slab, Grade 1 (Easy)",
		"Notched Slab, Grade 2 (Moderate)",
		"Notched Slab, Grade 3 (Challenging)",
		"Smooth Slab",
		"Smooth Slab, Grade 1 (Easy)",
		"Smooth Slab, Grade 2 (Moderate)",
		"Smooth Slab, Grade 3 (Challenging)",
	],
};