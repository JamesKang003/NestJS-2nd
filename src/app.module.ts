import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
})

// @Module({
//   // process.env.MONGO_URL 부분은 하드 코딩해도 괜찮다. "mongodb://localhost:27017"
//   imports: [MongooseModule.forRoot(process.env.MONGO_URL)],
// })
export class AppModule {}
