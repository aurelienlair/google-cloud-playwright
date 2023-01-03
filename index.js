const { exec } = require('child_process');

exports.runUITests = async (_req, res) => {
  res.setHeader('content-type', 'application/json');
  try {
    await new Promise((resolve, reject) => {
      const uiTest = exec('npm run ui:authentication', (err) =>
        err ? reject(err) : resolve()
      );
      uiTest.stdout.pipe(process.stdout);
      uiTest.stderr.pipe(process.stderr);
    });
    await res.status(200).send('Test cases passed');
  } catch (error) {
    res.status(422).send(
      JSON.stringify({
        error: error.stack,
      })
    );
  }
};
