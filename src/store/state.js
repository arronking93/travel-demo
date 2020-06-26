let defaultCity = "杭州";
try {
  defaultCity = localStorage.travelCity || "杭州";
} catch (e) {
  console.log("localStorage not supported");
}

export default {
  curCity: defaultCity
};
