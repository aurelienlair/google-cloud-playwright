const { exec } = require('child_process');

exports.demo = async (req, res) => {
  res.setHeader('content-type', 'application/json');
  try {
    await new Promise((resolve, reject) => {
      const testingdemo = exec('npm run firstrun', (err) =>
        err ? reject(err) : resolve()
      );
      testingdemo.stdout.pipe(process.stdout);
      testingdemo.stderr.pipe(process.stderr);
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
