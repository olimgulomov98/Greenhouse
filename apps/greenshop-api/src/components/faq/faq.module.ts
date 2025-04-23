import { Module } from '@nestjs/common';
import { FaqService } from './faq.service';
import { FaqResolver } from './faq.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import faqSchema from '../../schemas/Faq.model';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Faq', schema: faqSchema }]), AuthModule, MemberModule],
	providers: [FaqService, FaqResolver],
})
export class FaqModule {}
