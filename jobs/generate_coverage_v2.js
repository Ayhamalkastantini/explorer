const { setCache } = require('../commonjs/redis')
const { getCoverageV2 } = require('../commonjs/coverage')

const generateCoverage = async () => {
  await setCache('coverageV2', await getCoverageV2())

  return process.exit(0)
}

generateCoverage()