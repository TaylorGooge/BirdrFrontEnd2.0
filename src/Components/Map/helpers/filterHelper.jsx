export function filterHelper(features, start, end) {
  features.slice().reverse().forEach(function(element, index, object) {
    const date = element.date;
    if (!(date >= start && date <= end)) {
      features.splice(object.length - 1 - index, 1);
    }
  });
  return features
}
