import { Module } from '@nestjs/common';
import { NoticeResolver } from './notice.resolver';
import { NoticeService } from './notice.service';
import NoticeSchema from '../../schemas/Notice.model';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Notice', schema: NoticeSchema }]), AuthModule, MemberModule],
	providers: [NoticeResolver, NoticeService],
	exports: [NoticeService],
})
export class NoticeModule {}
