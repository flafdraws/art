export const routes = [
  { hash: '', tab: 0 },
  { hash: '#/about', tab: 1 },
  { hash: '#/tos', tab: 2 },
  { hash: '#/prices', tab: 3 },
  { hash: '#/buy', tab: 4 },
];

export const getTabFromRoute = () => {
  const route = routes.find(route => route.hash === window.location.hash)
  return route ? route.tab : 0;
}

export const setRouteFromTab = (tab) => {
  if (tab >= 0 && tab < routes.length) {
    window.location.hash = routes[tab].hash;
  }
}