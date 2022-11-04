module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/user/*.json");
  
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}