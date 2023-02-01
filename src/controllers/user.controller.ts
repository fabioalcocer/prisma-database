import { Request, Response } from 'express'
import prisma from '../services/prisma'

export const userController = {
  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany()
    //  {
    //   where: {
    //     fname: {
    //       startsWith: 'F',
    //     },
    //   },
    // }
    return res.json(users)
  },

  async createUser(req: Request, res: Response) {
    const userData = req.body
    const user = await prisma.user.create({
      data: {
        fname: userData.fname,
        lname: userData.lname,
      },
      include: {
        car: true,
      },
    })

    return res.json({ user: user })
  },

  async findUniqueUser(req: Request, res: Response) {
    const paramId = req.params.id

    const uniqueUser = await prisma.user.findUnique({
      where: {
        id: paramId,
      },
    })

    return res.json({ uniqueUser: uniqueUser })
  },

  async updateUser(req: Request, res: Response) {
    const paramId = req.params.id
    const fname = req.body.fname

    const updateUser = await prisma.user.update({
      data: {
        fname: fname,
      },
      where: {
        id: paramId,
      },
    })

    return res.json({ updateUser: updateUser })
  },

  async deleteUser(req: Request, res: Response) {
    const paramId = req.params.id

    const deletedUser = await prisma.user.delete({
      where: {
        id: paramId,
      }
    })

    return res.json({ deletedUser: deletedUser })
  }
}
