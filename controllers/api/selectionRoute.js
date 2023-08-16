const router = require('express').Router();
const { Selection } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  console.log(req.body);
  console.log(req.session.user_id)
  try {
    const newSelection = await Selection.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSelection);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const SelectionData = await Selection.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!SelectionData) {
      res.status(404).json({ message: 'No Selection found with this id!' });
      return;
    }

    res.status(200).json(SelectionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;