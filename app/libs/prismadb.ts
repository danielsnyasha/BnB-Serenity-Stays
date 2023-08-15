import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}


const getPrisma = (): PrismaClient => {
  if (typeof window === "undefined") {
    // Running on the server
    if (!global.prisma) {
      global.prisma = new PrismaClient()
    }
    return global.prisma
  } else {
    // Running on the client
    if (!window.prisma) {
      window.prisma = new PrismaClient()
    }
    return window.prisma
  }
}

export default getPrisma;
