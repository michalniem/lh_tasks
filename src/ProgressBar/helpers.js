const loremIpsupParagraph =
  "Aenean a mollis odio, eget gravida sem. Vivamus pellentesque gravida facilisis. Vestibulum lobortis sagittis nunc, non convallis dui lacinia id. Vestibulum rutrum nisl at massa aliquam commodo. Pellentesque et nibh nunc. Donec in nunc sem. Morbi eu orci efficitur, sodales mi non, bibendum est. Sed sit amet nisl tortor. Nam orci elit, placerat a iaculis id, rutrum ut enim. Quisque commodo mauris enim, eget interdum lorem porttitor sit amet. Nunc tempor ac nunc id viverra. Nullam tempus viverra pulvinar. Nullam ac sollicitudin nulla.";

export const generateLoremIpsumText = (numberOfParagraphs = 1) => {
  return new Array(numberOfParagraphs).fill(0).reduce((acc) => {
    acc += loremIpsupParagraph;
    return acc;
  }, "");
};
