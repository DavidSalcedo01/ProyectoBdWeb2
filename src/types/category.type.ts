import type { Model } from 'mongoose'

export type Category = {
  id?: string
  name: string
  description?: string
}

export type User = {
  id?: string
  name: string
  email?: string
}

export type CategoryModel = Model<Category>
export type UserModel = Model<User>
