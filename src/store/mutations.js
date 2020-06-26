export default {
  changeCurCity(state, city) {
    state.curCity = city;
    try {
      localStorage.travelCity = city;
    } catch (e) {
      console.log("localStorage not supported");
    }
  }
};
