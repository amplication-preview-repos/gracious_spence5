/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Topic as PrismaTopic } from "@prisma/client";

export class TopicServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TopicCountArgs, "select">): Promise<number> {
    return this.prisma.topic.count(args);
  }

  async topics<T extends Prisma.TopicFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TopicFindManyArgs>
  ): Promise<PrismaTopic[]> {
    return this.prisma.topic.findMany<Prisma.TopicFindManyArgs>(args);
  }
  async topic<T extends Prisma.TopicFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TopicFindUniqueArgs>
  ): Promise<PrismaTopic | null> {
    return this.prisma.topic.findUnique(args);
  }
  async createTopic<T extends Prisma.TopicCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TopicCreateArgs>
  ): Promise<PrismaTopic> {
    return this.prisma.topic.create<T>(args);
  }
  async updateTopic<T extends Prisma.TopicUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TopicUpdateArgs>
  ): Promise<PrismaTopic> {
    return this.prisma.topic.update<T>(args);
  }
  async deleteTopic<T extends Prisma.TopicDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TopicDeleteArgs>
  ): Promise<PrismaTopic> {
    return this.prisma.topic.delete(args);
  }
}