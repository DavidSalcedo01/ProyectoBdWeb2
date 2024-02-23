import express from 'express'
import { Category, User } from '../types/category.type'
import CategoryService from '../services/category.service'

const router = express.Router()
const service = new CategoryService()

router.post('/', async (req, res) => {
  const category: Category = req.body
  const newCategory = await service.create(category)

  res.status(201).json(newCategory)
})

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.findAll()
    res.status(200).json(categories)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const category = await service.findById(req.params.id)
    res.status(200).json(category)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const category = await service.findById(req.query.name as string)
    res.status(200).json(category)
  } catch (error) {
    next(error)
  }
})

//---------------------------------------------
router.post('/user', async (req, res) => {
  const user: User = req.body
  const newCategory = await service.create(user)

  res.status(201).json(newCategory)
})


export default router
