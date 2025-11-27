const express = require('express');
const fs = require('fs-extra');
const path = require('path');

const router = express.Router();
const DATA_PATH = path.join(__dirname, '..', 'data', 'developers.json');

async function readData() {
  try {
    const exists = await fs.pathExists(DATA_PATH);
    if (!exists) {
      await fs.outputJson(DATA_PATH, []);
      return [];
    }
    return await fs.readJson(DATA_PATH);
  } catch (err) {
    return [];
  }
}

async function writeData(data) {
  await fs.outputJson(DATA_PATH, data, { spaces: 2 });
}

router.get('/', async (req, res) => {
  res.json(await readData());
});

router.post('/', async (req, res) => {
  const { name, role, techStack, experience } = req.body;
  if (!name || !role || !techStack || experience === undefined)
    return res.status(400).json({ error: 'Missing required fields' });

  const parsedExp = Number(experience);
  if (Number.isNaN(parsedExp) || parsedExp < 0)
    return res.status(400).json({ error: 'Experience must be non-negative' });

  const list = await readData();
  const newDev = {
    id: Date.now().toString(),
    name: name.trim(),
    role,
    techStack: techStack.split(',').map(t => t.trim()).filter(Boolean),
    experience: parsedExp,
    createdAt: new Date().toISOString()
  };
  list.unshift(newDev);
  await writeData(list);
  res.status(201).json(newDev);
});

module.exports = router;