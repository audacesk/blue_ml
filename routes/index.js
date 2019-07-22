const config = require('config');
const express = require('express');
const router = express.Router();
const child_process = require('child_process');
const path = require('path')
const chalk = require('chalk');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ 'status': 'success' });
});

router.post('/invoice', async (req, res, next) => {
  var filename = req.body.filename;
  var bin_path = path.resolve(config.get('extractor_path'));
  var invoices_path = path.resolve(config.get('data_path.invoices'));
  var templates_path = path.resolve(config.get('templates_path'));

  var thread = child_process.spawnSync(`python`, [bin_path, '-i', `${invoices_path}/${filename}`, '-t', templates_path],
  { encoding : 'utf8', shell: true });

  if (thread.error) {
    console.log(chalk.red('ERROR: ', thread.error))
  }

  res.send({ 'status': 'success', 'data': thread.output[1] });
});

module.exports = router;
