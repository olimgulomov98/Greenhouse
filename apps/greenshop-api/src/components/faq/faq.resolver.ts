import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FaqService } from './faq.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { MemberType } from '../../libs/enums/member.enum';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Faq } from '../../libs/dto/faq/faq';
import { FaqInput } from '../../libs/dto/faq/faq.input';
import { WithoutGuard } from '../auth/guards/without.guard';

@Resolver()
export class FaqResolver {
	constructor(private readonly faqService: FaqService) {}

	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation(() => Faq)
	public async faqCreate(@Args('input') input: FaqInput): Promise<Faq> {
		console.log('Mutation faqCreate');

		return await this.faqService.faqCreate(input);
	}

	@UseGuards(WithoutGuard)
	@Query(() => [Faq])
	public async getFaq(): Promise<Faq[]> {
		console.log('Mutation getFaq');

		return await this.faqService.getFaq();
	}
}
