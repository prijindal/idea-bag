const R = 6371e3; // metres

if (Number.prototype.toRadians === undefined) {
    Number.prototype.toRadians = function() { return this * Math.PI / 180; };
}

const distanceBetweenTwoPoints = (start, end) => {
    var φ1 = start.lat.toRadians();
    var φ2 = end.lat.toRadians();
    var Δφ = (end.lat-start.lat).toRadians();
    var Δλ = (end.lng-start.lng).toRadians();

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    return Math.round(d) / 1000
}

export default distanceBetweenTwoPoints
