function getBasePath() {
  var basePath = '';

  if (process.env.NEXT_PUBLIC_BASE_PATH){
      if (process.env.NEXT_PUBLIC_BASE_PATH.startsWith("/") ){
          basePath = process.env.NEXT_PUBLIC_BASE_PATH;
      } else {
          basePath = "/" + process.env.NEXT_PUBLIC_BASE_PATH;
      }
  }

  return basePath;
}

module.exports = getBasePath;
