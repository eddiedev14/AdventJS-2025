// Día 19 - Advent JS

/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
    const correctRoute = [];

    // Create a route map
    const routeMap = routes.reduce((map, route) => {
        const [origin, destination] = route;
        map[origin] = destination;
        return map;
    }, {})

    // Add always first route
    correctRoute.push(...routes[0]);

    // Add other routes
    while (routeMap[correctRoute.at(-1)]) {
        const nextDestination = routeMap[correctRoute.at(-1)];
        correctRoute.push(nextDestination);
    }

    return correctRoute;
}

console.log(
    revealSantaRoute([
        ['MEX', 'CAN'],
        ['UK', 'GER'],
        ['CAN', 'UK']
    ])
)

console.log(
    revealSantaRoute([
        ['USA', 'BRA'],
        ['JPN', 'PHL'],
        ['BRA', 'UAE'],
        ['UAE', 'JPN'],
        ['CMX', 'HKN']
    ])
)

console.log(
    revealSantaRoute([
        ['STA', 'HYD'],
        ['ESP', 'CHN']
    ])
)