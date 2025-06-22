import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json("Wellcome to MEN api scaffold!");
});

export default router;