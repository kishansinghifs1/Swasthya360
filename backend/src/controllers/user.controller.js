import { Prisma } from "@prisma/client";
import { prisma } from "../config/prisma.config.js";
export const createUser = async (userData) => { 
    return await prisma.user.create({
        data: userData
    });
};

export const getUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email }
    });
}
export const getUserById = async (id
) => {
    return await prisma.user.findUnique({
        where: { id }
    });
}


